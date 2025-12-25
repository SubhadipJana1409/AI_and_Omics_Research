BiocManager::install(c("GEOquery","affy","arrayQualityMetrics"))


library(GEOquery)             # Download GEO datasets (series matrix, raw CEL files)
library(affy)                 # Pre-processing of Affymetrix microarray data (RMA normalization)
library(arrayQualityMetrics)  # QC reports for microarray data
library(dplyr)                # Data manipulation


gse_data <- getGEO("GSE75214", GSEMatrix = TRUE)

expression_data <- exprs(gse_data$GSE75214_series_matrix.txt.gz)

feature_data <-  fData(gse_data$GSE75214_series_matrix.txt.gz)

phenotype_data <-  pData(gse_data$GSE75214_series_matrix.txt.gz)

sum(is.na(phenotype_data$source_name_ch1))

untar("data/GSE75214_RAW.tar", exdir = "data/CEL_Files")


raw_data <- ReadAffy(celfile.path = "data/CEL_Files")

raw_data


arrayQualityMetrics(expressionset = raw_data,
                    outdir = "results/QC_Raw_Data",
                    force = TRUE,
                    do.logtransform = TRUE)

normalized_data <- rma(raw_data)

# QC after data normalization
arrayQualityMetrics(expressionset = normalized_data,
                    outdir = "results/QC_Normalized_Data",
                    force = TRUE)

# Extract normalized expression values into a data frame
processed_data <- as.data.frame(exprs(normalized_data))

dim(processed_data)   # Dimensions: number of probes × number of samples


row_median <- rowMedians(as.matrix(processed_data))

# Visualize distribution of probe median intensities
hist(row_median,
     breaks = 100,
     freq = FALSE,
     main = "Median Intensity Distribution")

# Set a threshold to remove low variance probes (dataset-specific, adjust accordingly)
threshold <- 5
abline(v = threshold, col = "black", lwd = 2)

# Select probes above threshold
indx <- row_median > threshold

filtered_data <- processed_data[indx, ]

# Rename filtered expression data with sample metadata
colnames(filtered_data) <- rownames(phenotype_data)

# Overwrite processed data with filtered dataset
processed_data <- filtered_data




#### Phenotype Data Preparation ####

# Phenotype data contains sample-level metadata such as condition,
# tissue type, or disease status.
# Required to define experimental groups for statistical analysis.

class(phenotype_data$source_name_ch1)

# Define experimental groups (normal vs cancer)
groups <- factor(phenotype_data$source_name_ch1,
                 levels = c("Biopsy from normal colonic mucosa of control individual",
                            "Biopsy from inflamed colonic mucosa of active UC patient"),
                 labels = c("normal", "disease"))

# View sample counts
table(groups)


# Check the groups
table(groups)

class(groups)
levels(groups)


table(phenotype_data$source_name_ch1)

sample_counts <- table(phenotype_data$source_name_ch1)
print(sample_counts)
group_counts <- table(groups)
print(group_counts)

total_samples <- sum(group_counts)
unique(phenotype_data$source_name_ch1)

groups_all <- factor(phenotype_data$source_name_ch1)
table(groups_all)
num_probes_before <- nrow(processed_data)
num_probes_after <- nrow(processed_data)
table(row_median > threshold)
