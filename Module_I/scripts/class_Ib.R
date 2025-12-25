# create subfolder(data,script, results)

# Note: In the reorganized structure, these folders should already exist.
# dir.create("data")
# dir.create("scripts")
# dir.create("results")

gene_expression <- c(2.2, 4.4, 6.6, 8.8, 10.10, 12.12, 14.14, 16.16, 18.18)
mean(gene_expression)
median(gene_expression)
mean_results <- mean(gene_expression)
median_results <- median(gene_expression)
plot(gene_expression)
hist(gene_expression)
barplot(gene_expression)
summary(gene_expression)
x<-(16)
class(x)
z<-(18)
class(z)
y<-20L    #INTEGER(it helps you to store large data, basically it reduse sizes the data set)
class(y)
var_1 <- c(2.2, 4.4, 6.6, 8.8, 10.10, 12.12, 14.14, 16.16, 18.18)
class(var_1)
as.integer(var_1)     #(its heps you convert numeric to integer)
class(var_1)
as.numeric(var_1)
class(var_1)
var_2 <- as.integer(var_1)
class(var_2)
var_3 <- as.numeric(var_2)
var_4 <- c("gene1", "gene2", "gene3")
class(var_4)
# factor or categorical data
disease_status <- c("cancer", "cancer", "normal", "cancer", "cancer", "normal")
disease_status <- as.factor(disease_status)   # chracter to factor
class(disease_status)
disease_status
disease_status <- factor(disease_status,
                         levels = c( "normal", "cancer"))
disease_status
age <- c(1,2,3,4,5,6,7,8)
var_5 <- age < 6
data <- read.csv("data/raw_data/patient_info.csv") # Updated path
View(data)
str(data)  #view the struicture the data
data$height_fac <- as.factor(data$height)
data
data$height_fac <- factor(data$height_fac,
                          levels = c("Tall", "Medium", "Short"))
levels(data$height_fac)
data$gender_fac <- as.factor(data$gender)
str(data)
data$gender_num <- ifelse(data$gender_fac == "Female", 1, 0)   #factor into numeric factor
class(data$gender_num)
data$gender_num <- as.factor(data$gender_num)
write.csv(disease_status, file = "results/patient_info_clean.csv")
save.image(file = "results/SubhadipJana_Class_Ib_Assignment.RData") # Updated output path
save(gene_expression, disease_status, file = "results/workpace.RData") # Updated output path
load("results/workpace.RData") # Updated input path
load("results/SubhadipJana_Class_Ib_Assignment.RData") # Updated input path
