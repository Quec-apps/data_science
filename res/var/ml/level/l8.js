//Introduction to Data in Machine Learning
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Introduction to Data in Machine Learning"; //title
window["msg"+k] = `
<b>Data</b> is a crucial component in the field of Machine Learning. It refers to the set of observations or measurements that can be used to train a machine-learning model. The quality and quantity of data available for training and testing play a significant role in determining the performance of a machine-learning model. Data can be in various forms such as numerical, categorical, or time-series data, and can come from various sources such as databases, spreadsheets, or APIs. Machine learning algorithms use data to learn patterns and relationships between input variables and target outputs, which can then be used for prediction or classification tasks.
<br><br>
Data is typically divided into two types: 
<ol>
    <li>Labeled data</li>
    <li>Unlabeled data</li>
</ol>
Labeled data includes a label or target variable that the model is trying to predict, whereas unlabeled data does not include a label or target variable. The data used in machine learning is typically numerical or categorical. Numerical data includes values that can be ordered and measured, such as age or income. Categorical data includes values that represent categories, such as gender or type of fruit.
<br><br>
Data can be divided into training and testing sets. The training set is used to train the model, and the testing set is used to evaluate the performance of the model. It is important to ensure that the data is split in a random and representative way.
<br><br>
Data preprocessing is an important step in the machine learning pipeline. This step can include cleaning and normalizing the data, handling missing values, and feature selection or engineering.
<br><br>
<b>DATA:</b> It can be any unprocessed fact, value, text, sound, or picture that is not being interpreted and analyzed. Data is the most important part of all Data Analytics, Machine Learning, and Artificial Intelligence. Without data, we can’t train any model and all modern research and automation will go in vain. Big Enterprises are spending lots of money just to gather as much certain data as possible. 
<br><br>
Example: Why did Facebook acquire WhatsApp by paying a huge price of $19 billion?
<br><br>
The answer is very simple and logical – it is to have access to the users’ information that Facebook may not have but WhatsApp will have. This information about their users is of paramount importance to Facebook as it will facilitate the task of improvement in their services. 
<br><br>
<b>INFORMATION:</b> Data that has been interpreted and manipulated and has now some meaningful inference for the users. 
<br><br>
<b>KNOWLEDGE:</b> Combination of inferred information, experiences, learning, and insights. Results in awareness or concept building for an individual or organization.
${ShowImage('9.png')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "How do we split data in Machine Learning?"; //title
window["msg"+k] = `
<b>Training Data:</b> The part of data we use to train our model. This is the data that your model actually sees(both input and output) and learns from.
<br><br><b>Validation Data:</b> The part of data that is used to do a frequent evaluation of the model, fit on the training dataset along with improving involved hyperparameters (initially set parameters before the model begins learning). This data plays its part when the model is actually training.
<br><br><b>Testing Data:</b> Once our model is completely trained, testing data provides an unbiased evaluation. When we feed in the inputs of Testing data, our model will predict some values(without seeing actual output). After prediction, we evaluate our model by comparing it with the actual output present in the testing data. This is how we evaluate and see how much our model has learned from the experiences feed in as training data, set at the time of training.
${ShowImage('10.png')}
Consider an example: 
<br><br>
There’s a Shopping Mart Owner who conducted a survey for which he has a long list of questions and answers that he had asked from the customers, this list of questions and answers is DATA. Now every time when he wants to infer anything and can’t just go through each and every question of thousands of customers to find something relevant as it would be time-consuming and not helpful. In order to reduce this overhead and time wastage and to make work easier, data is manipulated through software, calculations, graphs, etc. as per your own convenience, this inference from manipulated data is Information. So, Data is a must for Information. Now Knowledge has its role in differentiating between two individuals having the same information. Knowledge is actually not technical content but is linked to the human thought process. 
<br><br>
Different Forms of Data
<br><br>
 - <b>Numeric Data :</b> If a feature represents a characteristic measured in numbers , it is called a numeric feature.
<br> - <b>Categorical Data :</b> A categorical feature is an attribute that can take on one of the limited , and usually fixed number of possible values on the basis of some qualitative property . A categorical feature is also called a nominal feature.
<br> - <b>Ordinal Data :</b> This denotes a nominal variable with categories falling in an ordered list . Examples include clothing sizes such as small, medium , and large , or a measurement of customer satisfaction on a scale from “not at all happy” to “very happy”.
`; //message

totalLevel = k;