//One Hot Encoding
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "One Hot Encoding in Machine Learning"; //title
window["msg"+k] = `
Most real-life datasets we encounter during our data science project development have columns of mixed data type. These datasets consist of both categorical as well as numerical columns. However, various Machine Learning models do not work with categorical data and to fit this data into the machine learning model it needs to be converted into numerical data. For example, suppose a dataset has a Gender column with categorical elements like Male and  Female. These labels have no specific order of preference and also since the data is string labels, machine learning models misinterpreted that there is some sort of hierarchy in them.
<br><br>
One approach to solve this problem can be label encoding where we will assign a numerical value to these labels for example Male and Female mapped to 0 and 1. But this can add bias in our model as it will start giving higher preference to the Female parameter as 1>0 but ideally, both labels are equally important in the dataset. To deal with this issue we will use the One Hot Encoding technique.

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "One Hot Encoding"; //title
window["msg"+k] = `
One hot encoding is a technique that we use to represent categorical variables as numerical values in a machine learning model.
${ShowImage('16.png')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "advantages of one hot encoding"; //title
window["msg"+k] = `
<ol>
    <li>It allows the use of categorical variables in models that require numerical input.</li>
    <li>It can improve model performance by providing more information to the model about the categorical variable.</li>
    <li>It can help to avoid the problem of ordinality, which can occur when a categorical variable has a natural ordering (e.g. “small”, “medium”, “large”).</li>
</ol>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "disadvantages of one hot encoding"; //title
window["msg"+k] = `
<ol>
    <li>It can lead to increased dimensionality, as a separate column is created for each category in the variable. This can make the model more complex and slow to train.</li>
    <li>It can lead to sparse data, as most observations will have a value of 0 in most of the one-hot encoded columns.</li>
    <li>It can lead to overfitting, especially if there are many categories in the variable and the sample size is relatively small.</li>
    <li>One-hot-encoding is a powerful technique to treat categorical data, but it can lead to increased dimensionality, sparsity, and overfitting. It is important to use it cautiously and consider other methods such as ordinal encoding or binary encoding.</li>
</ol>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "One Hot Encoding Examples"; //title
window["msg"+k] = `
In One Hot Encoding, the categorical parameters will prepare separate columns for both Male and Female labels. So, wherever there is a Male, the value will be 1 in the Male column and 0 in the Female column, and vice-versa. Let’s understand with an example: Consider the data where fruits, their corresponding categorical values, and prices are given.
<table>
<thead>
<tr>
<th>Fruit</th>
<th>Categorical value of fruit</th>
<th>Price</th>
</tr>
</thead>
<tbody>
<tr>
<td>apple</td>
<td>1</td>
<td>5</td>
</tr>
<tr>
<td>mango</td>
<td>2</td>
<td>10</td>
</tr>
<tr>
<td>apple</td>
<td>1</td>
<td>15</td>
</tr>
<tr>
<td>orange</td>
<td>3</td>
<td>20</td>
</tr>
</tbody>
</table>
The output after applying one-hot encoding on the data is given as follows,
<table>
<thead>
<tr>
<th>apple</th>
<th>mango</th>
<th>orange</th>
<th>price</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>0</td>
<td>0</td>
<td>5</td>
</tr>
<tr>
<td>0</td>
<td>1</td>
<td>0</td>
<td>10</td>
</tr>
<tr>
<td>1</td>
<td>0</td>
<td>0</td>
<td>15</td>
</tr>
<tr>
<td>0</td>
<td>0</td>
<td>1</td>
<td>20</td>
</tr>
</tbody>
</table>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "One-Hot Encoding of Categorical Column Using Pandas library"; //title
window["msg"+k] = `
We can use ${WordCode('pd.get_dummies()')} function from pandas to one-hot encode the categorical columns.
${FullCode(`
one_hot_encoded_data = pd.get_dummies(data, columns = ['Remarks', 'Gender']) 
print(one_hot_encoded_data)`)}
<h3>Output:</h3>
${ShowImage('17.png')}
We can observe that we have 3 <i>Remarks</i> and 2 <i>Gender</i> columns in the data. However, you can just use n-1 columns to define parameters if it has n unique labels. For example, if we only keep the <i>Gender_Female</i> column and drop the <i>Gender_Male</i> column, then also we can convey the entire information as when the label is 1, it means female and when the label is 0 it means male. This way we can encode the categorical data and reduce the number of parameters as well.

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "One Hot Encoding using Sci-kit Learn Library"; //title
window["msg"+k] = `
Scikit-learn(sklearn) is a popular machine-learning library in Python that provide numerous tools for data preprocessing. It provides a OneHotEncoder function that we use for encoding categorical and numerical variables into binary vectors, also before implementing this algorithm. Make sure the categorical values must are labeled and encoded as one-hot encoding takes only numerical categorical values. 
${FullCode(`
# importing libraries 
import pandas as pd 
import numpy as np 
from sklearn.preprocessing import OneHotEncoder 
  
# Retrieving data 
data = pd.read_csv('Employee_data.csv') 
  
# Converting type of columns to category 
data['Gender'] = data['Gender'].astype('category') 
data['Remarks'] = data['Remarks'].astype('category') 
  
  
# Assigning numerical values and storing it in another columns 
data['Gen_new'] = data['Gender'].cat.codes 
data['Rem_new'] = data['Remarks'].cat.codes 
  
  
# Create an instance of One-hot-encoder 
enc = OneHotEncoder() 
  
# Passing encoded columns 
  
enc_data = pd.DataFrame(enc.fit_transform( 
    data[['Gen_new', 'Rem_new']]).toarray()) 
  
# Merge with main 
New_df = data.join(enc_data) 
  
print(New_df) `)}
${OutputCode(`
Employee_Id  Gender Remarks  Gen_new  Rem_new    0    1    2    3    4
0            45    Male    Nice        1        2  0.0  1.0  0.0  0.0  1.0
1            78  Female    Good        0        0  1.0  0.0  1.0  0.0  0.0
2            56  Female   Great        0        1  1.0  0.0  0.0  1.0  0.0
3            12    Male   Great        1        1  0.0  1.0  0.0  1.0  0.0
4             7  Female    Nice        0        2  1.0  0.0  0.0  0.0  1.0
5            68  Female   Great        0        1  1.0  0.0  0.0  1.0  0.0
6            23    Male    Good        1        0  0.0  1.0  1.0  0.0  0.0
7            45  Female    Nice        0        2  1.0  0.0  0.0  0.0  1.0
8            89    Male   Great        1        1  0.0  1.0  0.0  1.0  0.0
9            75  Female    Nice        0        2  1.0  0.0  0.0  0.0  1.0
10           47  Female    Good        0        0  1.0  0.0  1.0  0.0  0.0
11           62    Male    Nice        1        2  0.0  1.0  0.0  0.0  1.0`)}
${Note('Here we have converted the enc.fit_transform() method to an array because the fit_transform method of OneHotEncoder returns SpiPy sparse matrix so converting to an array first enables us to save space when we have a huge number of categorical variables.')}

`; //message

totalLevel = k;