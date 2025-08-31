getwd()
library(dplyr)
file.exists("data/DEGs_Data_1.csv")
file.exists("data/DEGs_Data_2.csv")
# Define the gene classification function
classify_gene <- function(logFC, padj) {
  # Check if the gene is statistically significant (padj < 0.05)
  if (padj < 0.05) {
    # If significant, check the direction and magnitude of change
    if (logFC > 1) {
      return('Upregulated')    # Higher expression, strong effect
    } else if (logFC < -1) {
      return('Downregulated')  # Lower expression, strong effect
    }
  }
  # If not significant OR fold change is small, classify as not significant
  return('Not_Significant')
}




# Load the first dataset
df1 <- read.csv("data/DEGs_Data_1.csv")

# Examine the structure
str(df1)
head(df1)

# Check for missing values
sum(is.na(df1$padj))
sum(is.na(df1$logFC))

# Basic statistics
summary(df1)


# Check which rows have missing padj values
missing_padj <- is.na(df1$padj)
cat("Number of missing padj values:", sum(missing_padj), "\n")

# Replace missing padj values with 1
df1$padj[is.na(df1$padj)] <- 1

# Verify the replacement worked
sum(is.na(df1$padj))  # Should be 0




# Method 1: Using mapply (applies function element-wise)
df1$status <- mapply(classify_gene, df1$logFC, df1$padj)

# Alternative Method 2: Using a loop (more explicit)
df1$status <- character(nrow(df1))  # Create empty column
for (i in 1:nrow(df1)) {
  df1$status[i] <- classify_gene(df1$logFC[i], df1$padj[i])
}

# Method 3: Vectorized approach (most R-like)
df1$status <- ifelse(df1$padj < 0.05 & df1$logFC > 1, "Upregulated",
                     ifelse(df1$padj < 0.05 & df1$logFC < -1, "Downregulated", 
                            "Not_Significant"))



# Look at the new column
head(df1[, c("Gene_Id", "padj", "logFC", "status")])

# Generate summary using table()
status_summary <- table(df1$status)
print(status_summary)

# More detailed summary with all possible categories
status_detailed <- table(factor(df1$status, 
                                levels = c("Upregulated", "Downregulated", "Not_Significant")))
print(status_detailed)

# Save the processed dataset
write.csv(df1, "Results/DEGs_Data_1_processed.csv", row.names = FALSE)

cat("Saved processed dataset 1\n")




# List of files to process
files <- c("DEGs_Data_1.csv", "DEGs_Data_2.csv")

# Process each file in a loop
for (i in seq_along(files)) {
  cat("\n=== Processing", files[i], "===\n")
  
  # Load dataset
  df <- read.csv(files[i])
  cat("Loaded", nrow(df), "genes\n")
  
  # Handle missing values
  missing_count <- sum(is.na(df$padj))
  cat("Missing padj values:", missing_count, "\n")
  df$padj[is.na(df$padj)] <- 1
  
  # Apply classification
  df$status <- mapply(classify_gene, df$logFC, df$padj)
  
  # Generate summary
  cat("Gene classification summary:\n")
  status_table <- table(factor(df$status, 
                               levels = c("Upregulated", "Downregulated", "Not_Significant")))
  print(status_table)
  
  # Save processed file
  output_filename <- paste0("Results/", gsub(".csv", "_processed.csv", files[i]))
  write.csv(df, output_filename, row.names = FALSE)
  cat("Saved to:", output_filename, "\n")
}


# Load both processed files for final comparison
df1_final <- read.csv("Results/DEGs_Data_1_processed.csv")
df2_final <- read.csv("Results/DEGs_Data_2_processed.csv")

# Compare datasets
cat("\n=== FINAL COMPARISON ===\n")
cat("Dataset 1 summary:\n")
print(table(df1_final$status))
cat("\nDataset 2 summary:\n")
print(table(df2_final$status))

# Calculate proportions
cat("\nDataset 2 proportions:\n")
props <- prop.table(table(df2_final$status))
print(round(props * 100, 2))


