# Bioinformatics Analysis Repository

This repository contains R scripts and data for various bioinformatics analyses, organized into modules.

## Repository Structure

The project is organized into four main modules:

*   **Class_3B**
*   **Class_3C**
*   **Module_I**
*   **Module_II**

### Standardized Directory Layout

Each module follows a consistent directory structure:

*   **`data/`**:  Place input data files here.
*   **`scripts/`**: Contains the R scripts for analysis.
*   **`results/`**:  Output files (plots, CSVs, reports) are generated here.

## Modules Description

### Class_3B
Analysis involving Affymetrix microarray data processing and Quality Control.
*   **Script:** `scripts/3b.R`
*   **Key Outputs:** QC reports in `results/QC_Raw_Data` and `results/QC_Normalized_Data`.

### Class_3C
Differential Gene Expression (DGE) analysis using LIMMA.
*   **Script:** `scripts/Assignments_5.R`
*   **Key Outputs:**
    *   Volcano plots in `results/plots/`
    *   Heatmaps in `results/maps/`
    *   DEG CSV tables in `results/`

### Module_I
Data cleaning and preparation assignment.
*   **Script:** `scripts/class_Ib.R`
*   **Key Outputs:** `results/patient_info_clean.csv`

### Module_II
Processing and classification of Differentially Expressed Genes (DEGs).
*   **Script:** `scripts/class_Ilb.R`
*   **Key Outputs:** Processed gene classification tables in `results/`.

## Usage

1.  Ensure you have R and the necessary packages installed (referenced in the scripts).
2.  Navigate to the specific module directory (e.g., `cd Module_II`).
3.  Run the analysis script (e.g., `Rscript scripts/class_Ilb.R` or open in RStudio).
