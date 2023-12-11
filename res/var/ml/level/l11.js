//Data Cleaning
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Data cleaning"; //title
window["msg"+k] = `
Data cleaning is one of the important parts of machine learning. It plays a significant part in building a model. It surely isn’t the fanciest part of machine learning and at the same time, there aren’t any hidden tricks or secrets to uncover. However, the success or failure of a project relies on proper data cleaning. Professional data scientists usually invest a very large portion of their time in this step because of the belief that “Better data beats fancier algorithms”. 
<br><br>
If we have a well-cleaned dataset, there are chances that we can get achieve good results with simple algorithms also, which can prove very beneficial at times especially in terms of computation when the dataset size is large. Obviously, different types of data will require different types of cleaning. However, this systematic approach can always serve as a good starting point. 
<h4>Steps Involved in Data Cleaning</h4>
Data cleaning is a crucial step in the machine learning (ML) pipeline, as it involves identifying and removing any missing, duplicate, or irrelevant data. The goal of data cleaning is to ensure that the data is accurate, consistent, and free of errors, as incorrect or inconsistent data can negatively impact the performance of the ML model.
<br><br>
Data cleaning, also known as <b>data cleansing</b> or <b>data preprocessing</b>, is a crucial step in the data science pipeline that involves identifying and correcting or removing errors, inconsistencies, and inaccuracies in the data to improve its quality and usability. Data cleaning is essential because raw data is often noisy, incomplete, and inconsistent, which can negatively impact the accuracy and reliability of the insights derived from it.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Steps involved in data cleaning"; //title
window["msg"+k] = `
<b>The following are the most common steps involved in data cleaning:</b>
<ul>
    <li>Import the necessary libraries</li>
    <li>Load the dataset</li>
    <li>Check the data information using df.info()</li>
</ul>
${ShowImage('14.jpg')}
${FullCode(`
import pandas as pd
import numpy as np
 
# Load the dataset
df = pd.read_csv('train.csv')
df.head()`)}
<h4>Output</h4>
<div class="table-con">
<table>
<thead>
<tr>
<th>
<p >&nbsp;</p>
</th>
<th>
<p ><strong>PassengerId</strong></p>
</th>
<th>
<p ><strong>Survived</strong></p>
</th>
<th>
<p ><strong>Pclass</strong></p>
</th>
<th>
<p ><strong>Name</strong></p>
</th>
<th>
<p ><strong>Sex</strong></p>
</th>
<th>
<p ><strong>Age</strong></p>
</th>
<th>
<p ><strong>SibSp</strong></p>
</th>
<th>
<p ><strong>Parch</strong></p>
</th>
<th>
<p ><strong>Ticket</strong></p>
</th>
<th>
<p ><strong>Fare</strong></p>
</th>
<th>
<p ><strong>Cabin</strong></p>
</th>
<th>
<p ><strong>Embarked</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<th>
<p ><strong>0</strong></p>
</th>
<td>
<p >1</p>
</td>
<td>
<p >0</p>
</td>
<td>
<p >3</p>
</td>
<td>
<p >Braund, Mr. Owen Harris</p>
</td>
<td>
<p >male</p>
</td>
<td>
<p >22.0</p>
</td>
<td>
<p >1</p>
</td>
<td>
<p >0</p>
</td>
<td>
<p >A/5 21171</p>
</td>
<td>
<p >7.2500</p>
</td>
<td>
<p >NaN</p>
</td>
<td>
<p >S</p>
</td>
</tr>
<tr>
<th>
<p ><strong>1</strong></p>
</th>
<td>
<p >2</p>
</td>
<td>
<p >1</p>
</td>
<td>
<p >1</p>
</td>
<td>
<p >Cumings, Mrs. John Bradley (Florence Briggs Th…</p>
</td>
<td>
<p >female</p>
</td>
<td>
<p >38.0</p>
</td>
<td>
<p >1</p>
</td>
<td>
<p >0</p>
</td>
<td>
<p >PC 17599</p>
</td>
<td>
<p >71.2833</p>
</td>
<td>
<p >C85</p>
</td>
<td>
<p >C</p>
</td>
</tr>
<tr>
<th>
<p ><strong>2</strong></p>
</th>
<td>
<p >3</p>
</td>
<td>
<p >1</p>
</td>
<td>
<p >3</p>
</td>
<td>
<p >Heikkinen, Miss. Laina</p>
</td>
<td>
<p >female</p>
</td>
<td>
<p >26.0</p>
</td>
<td>
<p >0</p>
</td>
<td>
<p >0</p>
</td>
<td>
<p >STON/O2. 3101282</p>
</td>
<td>
<p >7.9250</p>
</td>
<td>
<p >NaN</p>
</td>
<td>
<p >S</p>
</td>
</tr>
<tr>
<th>
<p ><strong>3</strong></p>
</th>
<td>
<p >4</p>
</td>
<td>
<p >1</p>
</td>
<td>
<p >1</p>
</td>
<td>
<p >Futrelle, Mrs. Jacques Heath (Lily May Peel)</p>
</td>
<td>
<p >female</p>
</td>
<td>
<p >35.0</p>
</td>
<td>
<p >1</p>
</td>
<td>
<p >0</p>
</td>
<td>
<p >113803</p>
</td>
<td>
<p >53.1000</p>
</td>
<td>
<p >C123</p>
</td>
<td>
<p >S</p>
</td>
</tr>
<tr>
<th>
<p ><strong>4</strong></p>
</th>
<td>
<p >5</p>
</td>
<td>
<p >0</p>
</td>
<td>
<p >3</p>
</td>
<td>
<p >Allen, Mr. William Henry</p>
</td>
<td>
<p >male</p>
</td>
<td>
<p >35.0</p>
</td>
<td>
<p >0</p>
</td>
<td>
<p >0</p>
</td>
<td>
<p >373450</p>
</td>
<td>
<p >8.0500</p>
</td>
<td>
<p >NaN</p>
</td>
<td>
<p >S</p>
</td>
</tr>
</tbody>
</table>
</div>
<b>1. Data inspection and exploration: </b>
<br><br>
This step involves understanding the data by inspecting its structure and identifying missing values, outliers, and inconsistencies.
<br><br> - Check the duplicate rows.
${FullCode(`
df.duplicated()`)}
${OutputCode(`
0      False
1      False
       ...  
889    False
890    False
Length: 891, dtype: bool`)}
<br> - Check the data information using df.info()
${FullCode(`
df.info()`)}
${OutputCode(`
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 891 entries, 0 to 890
Data columns (total 12 columns):
 #   Column       Non-Null Count  Dtype  
---  ------       --------------  -----  
 0   PassengerId  891 non-null    int64  
 1   Survived     891 non-null    int64  
 2   Pclass       891 non-null    int64  
 3   Name         891 non-null    object 
 4   Sex          891 non-null    object 
 5   Age          714 non-null    float64
 6   SibSp        891 non-null    int64  
 7   Parch        891 non-null    int64  
 8   Ticket       891 non-null    object 
 9   Fare         891 non-null    float64
 10  Cabin        204 non-null    object 
 11  Embarked     889 non-null    object 
dtypes: float64(2), int64(5), object(5)
memory usage: 83.7+ KB`)}
From the above data info, we can see that Age and Cabin have an unequal number of counts. And some of the columns are categorical and have data type objects and some are integer and float values.
<br><br>
Let’s see the descriptive structure of the data using <b>df.describe()</b>
${FullCode(`
df.describe()`)}
<h4>Output</h4>
<div class="table-con">
<table>
<thead>
<tr>
<th>
<p >&nbsp;</p>
</th>
<th>
<p ><strong>PassengerId</strong></p>
</th>
<th>
<p ><strong>Survived</strong></p>
</th>
<th>
<p ><strong>Pclass</strong></p>
</th>
<th>
<p ><strong>Age</strong></p>
</th>
<th>
<p ><strong>SibSp</strong></p>
</th>
<th>
<p ><strong>Parch</strong></p>
</th>
<th>
<p ><strong>Fare</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<th>
<p ><strong>count</strong></p>
</th>
<td>
<p >891.000000</p>
</td>
<td>
<p >891.000000</p>
</td>
<td>
<p >891.000000</p>
</td>
<td>
<p >714.000000</p>
</td>
<td>
<p >891.000000</p>
</td>
<td>
<p >891.000000</p>
</td>
<td>
<p >891.000000</p>
</td>
</tr>
<tr>
<th>
<p ><strong>mean</strong></p>
</th>
<td>
<p >446.000000</p>
</td>
<td>
<p >0.383838</p>
</td>
<td>
<p >2.308642</p>
</td>
<td>
<p >29.699118</p>
</td>
<td>
<p >0.523008</p>
</td>
<td>
<p >0.381594</p>
</td>
<td>
<p >32.204208</p>
</td>
</tr>
<tr>
<th>
<p ><strong>std</strong></p>
</th>
<td>
<p >257.353842</p>
</td>
<td>
<p >0.486592</p>
</td>
<td>
<p >0.836071</p>
</td>
<td>
<p >14.526497</p>
</td>
<td>
<p >1.102743</p>
</td>
<td>
<p >0.806057</p>
</td>
<td>
<p >49.693429</p>
</td>
</tr>
<tr>
<th>
<p ><strong>min</strong></p>
</th>
<td>
<p >1.000000</p>
</td>
<td>
<p >0.000000</p>
</td>
<td>
<p >1.000000</p>
</td>
<td>
<p >0.420000</p>
</td>
<td>
<p >0.000000</p>
</td>
<td>
<p >0.000000</p>
</td>
<td>
<p >0.000000</p>
</td>
</tr>
<tr>
<th>
<p ><strong>25%</strong></p>
</th>
<td>
<p >223.500000</p>
</td>
<td>
<p >0.000000</p>
</td>
<td>
<p >2.000000</p>
</td>
<td>
<p >20.125000</p>
</td>
<td>
<p >0.000000</p>
</td>
<td>
<p >0.000000</p>
</td>
<td>
<p >7.910400</p>
</td>
</tr>
<tr>
<th>
<p ><strong>50%</strong></p>
</th>
<td>
<p >446.000000</p>
</td>
<td>
<p >0.000000</p>
</td>
<td>
<p >3.000000</p>
</td>
<td>
<p >28.000000</p>
</td>
<td>
<p >0.000000</p>
</td>
<td>
<p >0.000000</p>
</td>
<td>
<p >14.454200</p>
</td>
</tr>
<tr>
<th>
<p ><strong>75%</strong></p>
</th>
<td>
<p >668.500000</p>
</td>
<td>
<p >1.000000</p>
</td>
<td>
<p >3.000000</p>
</td>
<td>
<p >38.000000</p>
</td>
<td>
<p >1.000000</p>
</td>
<td>
<p >0.000000</p>
</td>
<td>
<p >31.000000</p>
</td>
</tr>
<tr>
<th>
<p ><strong>max</strong></p>
</th>
<td>
<p >891.000000</p>
</td>
<td>
<p >1.000000</p>
</td>
<td>
<p >3.000000</p>
</td>
<td>
<p >80.000000</p>
</td>
<td>
<p >8.000000</p>
</td>
<td>
<p >6.000000</p>
</td>
<td>
<p >512.329200</p>
</td>
</tr>
</tbody>
</table>
</div>
<b>2. Removal of unwanted observations</b>
<br><br>
This includes deleting duplicate/ redundant or irrelevant values from your dataset. Duplicate observations most frequently arise during data collection and Irrelevant observations are those that don’t actually fit the specific problem that you’re trying to solve. 
<br><br>
<ul>
    <li>Redundant observations alter the efficiency to a great extent as the data repeats and may add towards the correct side or towards the incorrect side, thereby producing unfaithful results.    </li>
    <li>Irrelevant observations are any type of data that is of no use to us and can be removed directly.    </li>
</ul>
Now we have to make a decision according to the subject of analysis, which factor is important for our discussion. As we know our machines don’t understand the text data. So, we have to either drop or convert the categorical column values into numerical types. Here we are dropping the Name columns because the Name will be always unique and it hasn’t a great influence on target variables. For the ticket, Let’s first print the 50 unique tickets.
${FullCode(`
df['Ticket'].unique()[:50]`)}
${OutputCode(`
array(['A/5 21171', 'PC 17599', 'STON/O2. 3101282', '113803', '373450',
       '330877', '17463', '349909', '347742', '237736', 'PP 9549',
       '113783', 'A/5. 2151', '347082', '350406', '248706', '382652',
       '244373', '345763', '2649', '239865', '248698', '330923', '113788',
       '347077', '2631', '19950', '330959', '349216', 'PC 17601',
       'PC 17569', '335677', 'C.A. 24579', 'PC 17604', '113789', '2677',
       'A./5. 2152', '345764', '2651', '7546', '11668', '349253',
       'SC/Paris 2123', '330958', 'S.C./A.4. 23567', '370371', '14311',
       '2662', '349237', '3101295'], dtype=object)`)}
From the above tickets, we can observe that it is made of two like first values ‘A/5 21171’ is joint from of ‘A/5’ and  ‘21171’ this may influence our target variables. It will the case of Feature Engineering. where we derived new features from a column or a group of columns. In the current case, we are dropping the “Name” and “Ticket” columns.
<h4>Drop Name and Ticket columns.</h4>
${FullCode(`
df1 = df.drop(columns=['Name','Ticket'])
df1.shape`)}
${OutputCode(`
(891, 10)`)}
<b>3. Handling missing data:</b>
<br><br>
Missing data is a common issue in real-world datasets, and it can occur due to various reasons such as human errors, system failures, or data collection issues. Various techniques can be used to handle missing data, such as imputation, deletion, or substitution.
<br><br>
Let’s check the % missing values columns-wise for each row using df.isnull() it checks whether the values are null or not and gives returns boolean values. and .sum() will sum the total number of null values rows and we divide it by the total number of rows present in the dataset then we multiply to get values in % i.e per 100 values how much values are null.
${FullCode(`
round((df1.isnull().sum()/df1.shape[0])*100,2)`)}
${OutputCode(`
PassengerId     0.00
Survived        0.00
Pclass          0.00
Sex             0.00
Age            19.87
SibSp           0.00
Parch           0.00
Fare            0.00
Cabin          77.10
Embarked        0.22
dtype: float64`)}
We cannot just ignore or remove the missing observation. They must be handled carefully as they can be an indication of something important. 
<br><br>
The two most common ways to deal with missing data are: 
<br><br>
1. Dropping observations with missing values.
<ul>
    <li>The fact that the value was missing may be informative in itself.    </li>
    <li>Plus, in the real world, you often need to make predictions on new data even if some of the features are missing!</li>
</ul>
As we can see from the above result that Cabin has 77% null values and Age has 19.87% and Embarked has 0.22% of null values. So, it’s not a good idea to fill 77% of null values. So, we will drop the Cabin column. Embarked column has only 0.22% of null values so, we drop the null values rows of Embarked column.
${FullCode(`
df2 = df1.drop(columns='Cabin')
df2.dropna(subset=['Embarked'], axis=0, inplace=True)
df2.shape`)}
${OutputCode(`(889, 9)`)}
2. Imputing the missing values from past observations.
<ul>
    <li>Again, “missingness” is almost always informative in itself, and you should tell your algorithm if a value was missing.</li>
    <li>Even if you build a model to impute your values, you’re not adding any real information. You’re just reinforcing the patterns already provided by other features.    </li>
</ul>
From the above describe table, we can see that there are very less differences between the mean and median i..e 29.6 and 28. So, here we can do any one from mean imputation or Median imputations. 
Note: 
<br><br>
 - Mean imputation is suitable when the data is normally distributed and has no extreme outliers.<br><br>
 - Median imputation is preferable when the data contains outliers or is skewed.
${FullCode(`
# Mean imputation
df3 = df2.fillna(df2.Age.mean())
# Let's check the null values again
df3.isnull().sum()`)}
${OutputCode(`
PassengerId    0
Survived       0
Pclass         0
Sex            0
Age            0
SibSp          0
Parch          0
Fare           0
Embarked       0
dtype: int64`)}
<b>4. Handling outliers:</b>
<br><br>
Outliers are extreme values that deviate significantly from the majority of the data. They can negatively impact the analysis and model performance. Techniques such as clustering, interpolation, or transformation can be used to handle outliers.
To check the outliers, We generally use a box plot. A box plot, also referred to as a box-and-whisker plot, is a graphical representation of a dataset’s distribution. It shows a variable’s median, quartiles, and potential outliers. The line inside the box denotes the median, while the box itself denotes the interquartile range (IQR). The whiskers extend to the most extreme non-outlier values within 1.5 times the IQR. Individual points beyond the whiskers are considered potential outliers. A box plot offers an easy-to-understand overview of the range of the data and makes it possible to identify outliers or skewness in the distribution.
<br><br>
Let’s plot the box plot for Age column data.
${FullCode(`
import matplotlib.pyplot as plt
 
plt.boxplot(df3['Age'], vert=False)
plt.ylabel('Variable')
plt.xlabel('Age')
plt.title('Box Plot')
plt.show()`)}
<h4>Output:</h4>
${ShowImage('15.png')}
As we can see from the above Box and whisker plot, Our age dataset has outliers values. The values less than 5 and more 55 are outliers.
${FullCode(`
# calculate summary statistics
mean = df3['Age'].mean()
std  = df3['Age'].std()
 
# Calculate the lower and upper bounds
lower_bound = mean - std*2
upper_bound = mean + std*2
 
print('Lower Bound :',lower_bound)
print('Upper Bound :',upper_bound)
 
# Drop the outliers
df4 = df3[(df3['Age'] >= lower_bound) 
                & (df3['Age'] <= upper_bound)]`)}
${OutputCode(`
Lower Bound : 3.705400107925648
Upper Bound : 55.578785285332785`)}
Similarly, we can remove the outliers of the remaining columns.
<b>5. Data transformation</b>
<br><br>
Data transformation involves converting the data from one form to another to make it more suitable for analysis. Techniques such as normalization, scaling, or encoding can be used to transform the data.
<ul>
    <li><b>Data validation and verification:</b> Data validation and verification involve ensuring that the data is accurate and consistent by comparing it with external sources or expert knowledge. </li>
</ul>
For the machine learning prediction, First, we separate independent and target features. Here we will consider only ‘Sex’ ‘Age’ ‘SibSp’, ‘Parch’ ‘Fare’ ‘Embarked’ only as the independent features and Survived as target variables. Because PassengerId will not affect the survival rate.
${FullCode(`
X = df3[['Pclass','Sex','Age', 'SibSp','Parch','Fare','Embarked']]
Y = df3['Survived']`)}
<ul>
    <li><b>Data formatting:</b> Data formatting involves converting the data into a standard format or structure that can be easily processed by the algorithms or models used for analysis. Here we will discuss commonly used data formatting techniques i.e. Scaling and Normalization.</li>
</ul>
<h4>Scaling:</h4>
<ul>
    <li>Scaling involves transforming the values of features to a specific range. It maintains the shape of the original distribution while changing the scale.</li>
    <li>Scaling is particularly useful when features have different scales, and certain algorithms are sensitive to the magnitude of the features.</li>
    <li>Common scaling methods include Min-Max scaling and Standardization (Z-score scaling).</li>
</ul>
<h4>Min-Max Scaling:</h4>
<ul>
    <li>Min-Max scaling rescales the values to a specified range, typically between 0 and 1.</li>
    <li>It preserves the original distribution and ensures that the minimum value maps to 0 and the maximum value maps to 1.</li>
</ul>
${FullCode(`
from sklearn.preprocessing import MinMaxScaler
 
# initialising the MinMaxScaler
scaler = MinMaxScaler(feature_range=(0, 1))
 
# Numerical columns
num_col_ = [col for col in X.columns if X[col].dtype != 'object']
x1 = X
# learning the statistical parameters for each of the data and transforming
x1[num_col_] = scaler.fit_transform(x1[num_col_])
x1.head()`)}
<h4>Output:</h4>
<div class="table-con">
<table>
<thead>
<tr>
<th>
<p >&nbsp;</p>
</th>
<th>
<p ><strong>Pclass</strong></p>
</th>
<th>
<p ><strong>Sex</strong></p>
</th>
<th>
<p ><strong>Age</strong></p>
</th>
<th>
<p ><strong>SibSp</strong></p>
</th>
<th>
<p ><strong>Parch</strong></p>
</th>
<th>
<p ><strong>Fare</strong></p>
</th>
<th>
<p ><strong>Embarked</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<th>
<p ><strong>0</strong></p>
</th>
<td>
<p >1.0</p>
</td>
<td>
<p >male</p>
</td>
<td>
<p >0.271174</p>
</td>
<td>
<p >0.125</p>
</td>
<td>
<p >0.0</p>
</td>
<td>
<p >0.014151</p>
</td>
<td>
<p >S</p>
</td>
</tr>
<tr>
<th>
<p ><strong>1</strong></p>
</th>
<td>
<p >0.0</p>
</td>
<td>
<p >female</p>
</td>
<td>
<p >0.472229</p>
</td>
<td>
<p >0.125</p>
</td>
<td>
<p >0.0</p>
</td>
<td>
<p >0.139136</p>
</td>
<td>
<p >C</p>
</td>
</tr>
<tr>
<th>
<p ><strong>2</strong></p>
</th>
<td>
<p >1.0</p>
</td>
<td>
<p >female</p>
</td>
<td>
<p >0.321438</p>
</td>
<td>
<p >0.000</p>
</td>
<td>
<p >0.0</p>
</td>
<td>
<p >0.015469</p>
</td>
<td>
<p >S</p>
</td>
</tr>
<tr>
<th>
<p ><strong>3</strong></p>
</th>
<td>
<p >0.0</p>
</td>
<td>
<p >female</p>
</td>
<td>
<p >0.434531</p>
</td>
<td>
<p >0.125</p>
</td>
<td>
<p >0.0</p>
</td>
<td>
<p >0.103644</p>
</td>
<td>
<p >S</p>
</td>
</tr>
<tr>
<th>
<p ><strong>4</strong></p>
</th>
<td>
<p >1.0</p>
</td>
<td>
<p >male</p>
</td>
<td>
<p >0.434531</p>
</td>
<td>
<p >0.000</p>
</td>
<td>
<p >0.0</p>
</td>
<td>
<p >0.015713</p>
</td>
<td>
<p >S</p>
</td>
</tr>
</tbody>
</table>
</div>
`; //message

totalLevel = k;