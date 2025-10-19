install.packages(c("dplyr", "tibble", "ggplot2", "pheatmap"))
BiocManager::install(c("limma", "AnnotationDbi", "hgu133plus2.db"))

BiocManager::install("hugene10sttranscriptcluster.db")
library(hugene10sttranscriptcluster.db)


library(AnnotationDbi)   # Handles annotation and probe–gene mapping
library(limma)           # Performs linear modeling and differential expression
library(dplyr)           # Simplifies data manipulation tasks
library(tibble)          
library(ggplot2)         # Used for plotting and visualization
library(pheatmap)        # Generates heatmaps for gene expression data
library(GEOquery)             # Download GEO datasets (series matrix, raw CEL files)
library(affy)                 # Pre-processing of Affymetrix microarray data (RMA normalization)
library(arrayQualityMetrics)  # QC reports for microarray data



gse_data <- getGEO("GSE75214", GSEMatrix = TRUE)

expression_data <- exprs(gse_data$GSE75214_series_matrix.txt.gz)

feature_data <-  fData(gse_data$GSE75214_series_matrix.txt.gz)

phenotype_data <-  pData(gse_data$GSE75214_series_matrix.txt.gz)

sum(is.na(phenotype_data$source_name_ch1))

untar("Raw_Data/GSE75214_RAW.tar", exdir = "Raw_Data/CEL_Files")



raw_data <- ReadAffy(celfile.path = "Raw_Data/CEL_Files")
arrayQualityMetrics(expressionset = raw_data,
                    outdir = "Results/QC_Raw_Data",
                    force = TRUE,
                    do.logtransform = TRUE)

normalized_data <- rma(raw_data)


arrayQualityMetrics(expressionset = normalized_data,
                    outdir = "Results/QC_Normalized_Data",
                    force = TRUE)

processed_data <- as.data.frame(exprs(normalized_data))

annotation(raw_data)

raw_data

ls("package:hugene10sttranscriptcluster.db")

columns(hugene10sttranscriptcluster.db)
keytypes(hugene10sttranscriptcluster.db)


probe_ids <- rownames(processed_data)

gene_symbols <- mapIds(
  hugene10sttranscriptcluster.db, 
  keys = probe_ids,
  column = "SYMBOL",
  keytype = "PROBEID",
  multiVals = "first"
)


symbols <- AnnotationDbi::select(
  hugene10sttranscriptcluster.db, 
  keys = probe_ids,
  column = c("SYMBOL", "ENTREZID", "GENENAME")
)

gene_map_df <- gene_symbols %>%
  as.data.frame() %>%
  tibble::rownames_to_column("PROBEID") %>%
  dplyr::rename(SYMBOL = 2)


duplicate_summary <- gene_map_df %>%
  group_by(SYMBOL) %>%
  summarise(probes_per_gene = n()) %>%
  arrange(desc(probes_per_gene))

# Identify genes associated with multiple probes
duplicate_genes <- duplicate_summary %>%
  filter(probes_per_gene > 1)

sum(duplicate_genes$probes_per_gene)

all(gene_map_df$PROBEID == row.names(processed_data))

processed_data_df <- processed_data %>%
  as.data.frame() %>%
  tibble::rownames_to_column("PROBEID") %>%
  dplyr::mutate(SYMBOL = gene_symbols[PROBEID]) %>%
  dplyr::relocate(SYMBOL, .after = PROBEID)

processed_data_df <- processed_data_df %>%
  dplyr::filter(!is.na(SYMBOL))

expr_only <- processed_data_df %>%
  dplyr::select(-PROBEID, -SYMBOL)

averaged_data <- limma::avereps(expr_only, ID = processed_data_df$SYMBOL)

x <- matrix(rnorm(8*3), 8, 3)
colnames(x) <- c("S1", "S2", "S3")
rownames(x) <- c("b", "a", "a", "c", "c", "b", "b", "b")
head(x)
avereps(x)  # Collapses duplicated row names by averaging

dim(averaged_data)

data <- as.data.frame(averaged_data)
data <- data.matrix(data)
str(data)        # Structure check
is.numeric(data) # Confirm numeric matrix

groups <- factor(phenotype_data$source_name_ch1,
                 levels = c("gastric mucosa", "gastric adenocarcinoma"),
                 label = c("normal", "cancer"))

class(groups)
levels(groups)

length(groups)  
table(groups)   

design <- model.matrix(~0 + groups)
colnames(design) <- levels(groups)
dim(design) 



fit_1 <- lmFit(data, design)


contrast_matrix <- makeContrasts(cancer_vs_normal = disease - normal,
                                 levels = design)



fit_contrast <- contrasts.fit(fit_1, contrast_matrix)

fit_2 <- eBayes(fit_contrast)

deg_results <- topTable(fit_2,
                        coef = "cancer_vs_normal",  # Specify contrast of interest
                        number = Inf,               # Return all genes
                        adjust.method = "BH")       # Benjamini-Hochberg correction

deg_results$threshold <- as.factor(ifelse(
  deg_results$adj.P.Val < 0.05 & deg_results$logFC > 1, "Upregulated",
  ifelse(deg_results$adj.P.Val < 0.05 & deg_results$logFC < -1, "Downregulated",
         "No")
))

upregulated <- subset(deg_results, threshold == "Upregulated")
downregulated <- subset(deg_results, threshold == "Downregulated")

deg_updown <- rbind(upregulated, downregulated)

write.csv(deg_results, file = "Results/DEGs_Results.csv")
write.csv(upregulated, file = "Results/Upregulated_DEGs.csv")
write.csv(downregulated, file = "Results/Downregulated_DEGs.csv")
write.csv(deg_updown, file = "Results/Updown_DEGs.csv")


png("Results_plots/volcano_plot.png", width = 2000, height = 1500, res = 300)

ggplot(deg_results, aes(x = logFC, y = -log10(adj.P.Val), color = threshold)) +
  geom_point(alpha = 0.7, size = 2) +
  scale_color_manual(values = c("Upregulated" = "red",
                                "Downregulated" = "blue",
                                "No" = "grey")) +
  theme_minimal() +
  labs(title = "Volcano Plot of Differentially Expressed Genes",
       x = "log2 Fold Change",
       y = "-log10(P-value)",
       color = "Regulation")

dev.off()

top_genes <- head(rownames(deg_updown[order(deg_updown$adj.P.Val), ]), 25)


heatmap_data <- data[top_genes, ]

group_char <- as.character(groups)
heatmap_names <- ave(group_char, group_char, FUN = function(x) paste0(x, "_", seq_along(x)))

colnames(heatmap_data) <- heatmap_names

png("Results_maps/heatmap_top25_DEGs.png", width = 2000, height = 1500, res = 300)

pheatmap(
  heatmap_data,
  scale = "none", # for already normalized data
  cluster_rows = FALSE,              # Disable row clustering
  cluster_cols = TRUE,               # Cluster samples
  show_rownames = TRUE,              # Display gene names
  show_colnames = TRUE,              # Display sample labels
  color = colorRampPalette(c("blue", "white", "red"))(100),
  fontsize_row = 3,
  fontsize_col = 5,
  main = "Top 25 Differentially Expressed Genes"
)

dev.off()
