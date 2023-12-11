//Label Encoding
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Label Encoding"; //title
window["msg"+k] = `
In machine learning projects, we usually deal with datasets having different categorical columns where some columns have their elements in the ordinal variable category for e.g a column income level having elements as low, medium, or high in this case we can replace these elements with 1,2,3. where 1 represents ‘low’  2  ‘medium’  and 3′ high’. Through this type of encoding, we try to preserve the meaning of the element where higher weights are assigned to the elements having higher priority.
<br><br>
<b>Label Encoding</b> is a technique that is used to convert categorical columns into numerical ones so that they can be fitted by machine learning models which only take numerical data. It is an important pre-processing step in a machine-learning project.
<h4>Example Of Label Encoding</h4>
Suppose we have a column Height in some dataset that has elements as Tall, Medium, and short. To convert this categorical column into a numerical column we will apply label encoding to this column. After applying label encoding, the Height column is converted into a numerical column having elements 0,1, and 2 where 0 is the label for tall, 1 is the label for medium, and 2 is the label for short height.
<table>
<tbody>
<tr>
<td>Height</td>
<td>Height</td>
</tr>
<tr>
<td>Tall</td>
<td>0</td>
</tr>
<tr>
<td>Medium</td>
<td>1</td>
</tr>
<tr>
<td>Short</td>
<td>2</td>
</tr>
</tbody>
</table>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Example of Label Encoding"; //title
window["msg"+k] = `
We will apply Label Encoding on the iris dataset on the target column which is Species. It contains three species Iris-setosa, Iris-versicolor, Iris-virginica. 
${FullCode(`
# Import libraries 
import numpy as np 
import pandas as pd 

# Import dataset 
df = pd.read_csv('../../data/Iris.csv') 

df['species'].unique() `)}
${OutputCode(`array(['Iris-setosa', 'Iris-versicolor', 'Iris-virginica'], dtype=object)`)}
After applying Label Encoding with LabelEncoder() our categorical value will replace with the numerical value[int].
${FullCode(`
# Import label encoder 
from sklearn import preprocessing 

# label_encoder object knows 
# how to understand word labels. 
label_encoder = preprocessing.LabelEncoder() 

# Encode labels in column 'species'. 
df['species']= label_encoder.fit_transform(df['species']) 

df['species'].unique() `)}
${OutputCode(`array([0, 1, 2], dtype=int64)`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Limitation of label Encoding"; //title
window["msg"+k] = `
Label encoding converts the categorical data into numerical ones, but it assigns a unique number(starting from 0) to each class of data. This may lead to the generation of priority issues during model training of data sets. A label with a high value may be considered to have high priority than a label having a lower value.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Example For Limitation of Label Encoding"; //title
window["msg"+k] = `
An attribute having output classes Mexico, Paris, Dubai. On Label Encoding, this column lets Mexico is replaced with 0, Paris is replaced with 1, and Dubai is replaced with 2. 
<br><br>
With this, it can be interpreted that Dubai has high priority than Mexico and Paris while training the model, But actually, there is no such priority relation between these cities here.
`; //message

totalLevel = k;