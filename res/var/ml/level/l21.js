//Logistics Regression
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "What is Logistic Regression?"; //title
window["msg"+k] = `
Logistic Regression is another statistical analysis method borrowed by Machine Learning. It is used when our dependent variable is dichotomous or binary. It just means a variable that has only 2 outputs, for example, A person will survive this accident or not, The student will pass this exam or not. The outcome can either be yes or no (2 outputs). This regression technique is similar to linear regression and can be used to predict the <b>Probabilities</b> for classification problems.
${ShowImage('59.png')}

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Types of Logistic Regression"; //title
window["msg"+k] = `
<p><strong>Here are the three main types of logistic regression</strong>:</p>
<p><strong>Binary logistic regression</strong></p>
<p>Binary logistic regression is used to predict the probability of a binary outcome, such as yes or no, true or false, or 0 or 1. For example, it could be used to predict whether a customer will churn or not, whether a patient has a disease or not, or whether a loan will be repaid or not<strong>.</strong></p>
<p><strong>Multinomial logistic regression</strong></p>
<p>Multinomial logistic regression is used to predict the probability of one of three or more possible outcomes, such as the type of product a customer will buy, the rating a customer will give a product, or the political party a person will vote for.</p>
<p><strong>Ordinal logistic regression</strong></p>
<p><strong>i</strong>s used to predict the probability of an outcome that falls into a predetermined order, such as the level of customer satisfaction, the severity of a disease, or the stage of cancer.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Why do we use Logistic Regression rather than Linear Regression?"; //title
window["msg"+k] = `
<p>After reading the definition of logistic regression we now know that it is only used when our dependent variable is binary and in linear regression this dependent variable is continuous.</p>
<p>The second problem is that if we add an outlier in our dataset, the best fit line in linear regression shifts to fit that point.</p>
<p>Now, if we use linear regression to find the best fit line which aims at minimizing the distance between the predicted value and actual value, the line will be like this:</p>
${ShowImage('60.png')}
<p>Here the threshold value is 0.5, which means if the value of h(x) is greater than 0.5 then we predict malignant tumor (1) and if it is less than 0.5 then we predict benign tumor (0). Everything seems okay here but now let’s change it a bit, we add some outliers in our dataset, now this best fit line will shift to that point. Hence the line will be somewhat like this:</p>
${ShowImage('61.png')}
<p>Do you see any problem here? The blue line represents the old threshold and the yellow line represents the new threshold which is maybe 0.2 here. To keep our predictions right we had to lower our threshold value. Hence we can say that linear regression is prone to outliers. Now here if h(x) is greater than 0.2 then only this regression will give correct outputs.</p>
<p>Another problem with linear regression is that the predicted values may be out of range. We know that probability can be between 0 and 1, but if we use linear regression this probability may exceed 1 or go below 0.</p>
<p>To overcome these problems we use Logistic Regression, which converts this straight best fit line in linear regression to an S-curve using the sigmoid function, which will always give values between 0 and 1. How does this work and what’s the math behind this will be covered in a later section?</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "How does Logistic Regression work?"; //title
window["msg"+k] = `
<strong>Logistic regression works in the following steps:</strong>
<ol>
<li><strong>Prepare the data: T</strong>he data should be in a format where each row represents a single observation and each column represents a different variable. The target variable (the variable you want to predict) should be binary (yes/no, true/false, 0/1).</li>
<li><strong>Train the model: </strong>We teach the model by showing it the training data. This involves finding the values of the model parameters that minimize the error in the training data.</li>
<li><strong>Evaluate the model: </strong>The model is evaluated on the held-out test data to assess its performance on unseen data.</li>
<li><strong>Use the model to make predictions:</strong> After the model has been trained and assessed, it can be used to forecast outcomes on new data.</li>
</ol>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Logistic Function"; //title
window["msg"+k] = `
Logistic regression <b>squeezes the output of linear regression between 0 and 1.</b>
${ShowImage('62.png')}
<p>In this equation:</p>
<ul><li><p><em>S</em>(<em>x</em>) represents the output of the sigmoid function.</p></li><li><p><em>x</em> is the input, which can take any real value. In logistic regression, we take the value of linear regression. So we can also write the equation as:${ShowImage('63.png')}</p></li><li><p><em>e</em> is the base of the natural logarithm, approximately equal to 2.71828.</p></li></ul>
${ShowImage('63.png')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Cost Function in Logistic Regression"; //title
window["msg"+k] = `
<p>Selecting the right model is not enough. You need a function that measures the performance of a Machine Learning model for given data. Cost Function quantifies the error between predicted values and expected values.</p>
<p>If you can’t measure it, you can’t improve it.</p>
<p>Another thing that will change with this transformation is Cost Function. In Linear Regression, we use <b>Mean Squared Error</b> for cost function given by:-</p>
${ShowImage('65.png')}
<p>and when this error function is plotted with respect to weight parameters of the Linear Regression Model, it forms a convex curve which makes it eligible to apply Gradient Descent Optimization Algorithm to minimize the error by finding global minima and adjust weights.</p>
${ShowImage('66.png')}
<b>Why don’t we use Mean Squared Error as a cost function in Logistic Regression?</b>
<p>In Logistic Regression Ŷi is a nonlinear function(<i>Ŷ</i>=1​/1+ e<sup>-z</sup>), if we put this in the above MSE equation it will give a non-convex function as shown:</p>
${ShowImage('67.jpg')}
<ul>
<li> <span style="font-size: revert; color: initial; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, sans-serif;">When we try to optimize values using gradient descent it will create complications to find global minima.</span> </li>
<li> <span style="font-size: revert; color: initial; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, sans-serif;">Another reason is in classification problems, we have target values like 0/1, So (</span><i style="font-size: revert; color: initial; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, sans-serif;">Ŷ-Y)<sup>2</sup></i><span style="font-size: revert; color: initial; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, sans-serif;">&nbsp;will always be in between 0-1 which can make it very difficult to keep track of the errors and it is difficult to store high precision floating numbers.</span> </li>
</ul>
<p><i>The cost function used in Logistic Regression is <b>Log Loss</b>.</i></p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "What is Log Loss?"; //title
window["msg"+k] = `
<p>Log loss, also known as logarithmic loss or cross-entropy loss, is a common evaluation metric for binary classification models. It measures the performance of a model by quantifying the difference between predicted probabilities and actual values. Log-loss is indicative of how close the prediction probability is to the corresponding actual/true value (0 or 1 in case of binary classification), penalizing inaccurate predictions with higher values. Lower log-loss indicates better model performance.</p>
<p>Log Loss is the most important classification metric based on probabilities. It’s hard to interpret raw log-loss values, but log-loss is still a good metric for comparing models. For any given problem, a lower log loss value means better predictions.</p>
<p><i>Mathematical interpretation:</i></p>
<p>Log Loss is the negative average of the log of corrected predicted probabilities for each instance.</p>
<p><i>Let us understand it with an example:</i></p>
${ShowImage('68.png')}
<p>The model is giving predicted probabilities as shown above.</p>
<h3 class="wp-block-heading" id="h-what-are-the-corrected-probabilities"><b>What are the corrected probabilities?</b></h3>
<p>-&gt; By default, the output of the logistics regression model is the probability of the sample being positive(indicated by 1) i.e if a logistic regression model is trained to classify on a <b>company&nbsp; dataset</b> then the predicted probability column says What is the probability that the person has bought jacket. Here in the above data set the probability that a person with ID6 will buy a jacket is 0.94.</p>
<p>In the same way, the probability that a person with ID5 will buy a jacket (i.e. belong to class 1) is 0.1 but the actual class for ID5 is 0, so the probability for the class is (1-0.1)=0.9. 0.9 is the correct probability for ID5.</p>
${ShowImage('69.png')}
<p><b>We will find a log of corrected probabilities for each instance</b>.</p>
${ShowImage('70.png')}
<p>As you can see these log values are negative. To deal with the negative sign, we take the<b> negative average of these values</b>, to maintain a common convention that lower loss scores are better.</p>
${ShowImage('71.png')}
<p><b> In short, there are three steps to find Log Loss:</b></p>
<ol>
<li> <b style="font-size: revert; color: initial; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, sans-serif;">To find corrected probabilities.</b> </li>
<li> <b style="font-size: revert; color: initial; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, sans-serif;">Take a log of corrected probabilities.</b> </li>
<li> <b style="font-size: revert; color: initial; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, sans-serif;">Take the negative average of the values we get in the 2nd step.</b> </li>
</ol>
<p><b><i>If we summarize all the above steps, we can use the formula:-</i></b></p>
${ShowImage('72.png')}
<p>Here Yi represents the actual class and log(p(yi)is the probability of that class.</p>
<ul>
<li> <span style="font-size: revert; color: initial; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, sans-serif;">p(yi) is the probability of 1.</span> </li>
<li> <span style="font-size: revert; color: initial; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, sans-serif;">1-p(yi) is the probability of 0.</span> </li>
</ul>
<p><b>Now Let’s see how the above formula is working in two cases:</b></p>
<ol>
<li> <span style="font-size: revert; color: initial; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, sans-serif;">When the actual class is 1: second term in the formula would be 0 and we will left with first term i.e. yi.log(p(yi)) and (1-1).log(1-p(yi) this will be 0.</span> </li>
<li> <span style="font-size: revert; color: initial; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, sans-serif;">When the actual class is 0: First-term would be 0 and will be left with the second term i.e (1-yi).log(1-p(yi)) and 0.log(p(yi)) will be 0.</span> </li>
</ol>
<p><i>wow!! we got back to the original formula for binary cross-entropy/log loss 🙂</i></p>
<h3 class="wp-block-heading" id="h-the-benefits-of-taking-logarithm-reveal-themselves-when-you-look-at-the-cost-function-graphs-for-actual-class-1-and-0"><b>The benefits of taking logarithm reveal themselves when you look at the cost function graphs for actual class 1 and 0 :</b></h3>
${ShowImage('73.png')}
<ul>
<li> <span style="font-size: revert; color: initial; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, sans-serif;">The Red line represents 1 class. As we can see, when the predicted probability (x-axis) is close to 1, the loss is less and when the predicted probability is close to 0, loss approaches infinity.</span> </li>
<li> <span style="font-size: revert; color: initial; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, sans-serif;">The Black line represents 0 class. As we can see, when the predicted probability (x-axis) is close to 0, the loss is less and when the predicted probability is close to 1, loss approaches infinity.</span> </li>
</ul>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Frequently Asked Questions"; //title
window["msg"+k] = `
<b>Q1. Why do we use log loss?</b><br>
<p>A. Log loss is commonly used as an evaluation metric for binary classification tasks for several reasons. Firstly, it provides a continuous and differentiable measure of the model’s performance, making it suitable for optimization algorithms. Secondly, log loss penalizes confident and incorrect predictions more heavily, incentivizing calibrated probability estimates. Finally, log loss can be interpreted as the logarithmic measure of the likelihood of the predicted probabilities aligning with the true labels.</p>
<br><br><b>Q2. What is a good log loss?</b><br>
<p>A. The interpretation of a “good” log loss value depends on the specific context and problem domain. In general, a lower log loss indicates better model performance. However, what constitutes a good log loss can vary depending on the complexity of the problem, the availability of data, and the desired level of accuracy. It is often useful to compare the log loss of different models or benchmarks to assess their relative performance.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Model building in Scikit-learn"; //title
window["msg"+k] = `
<p class="p-margin">Let's build the diabetes prediction model.</p>
<p class="p-margin">Here, you are going to predict diabetes using the Logistic Regression Classifier.</p>
<p class="p-margin">Let's first load the required Pima Indian Diabetes dataset using the pandas' read CSV function. You can download data from the following link: <a href="https://www.kaggle.com/uciml/pima-indians-diabetes-database" target="_blank" rel="noopener">pima indians diabetes database</a></p>
<h3 id="loading-data-wewil">Loading Data</h3>
<p class="p-margin">We will simplify columns by providing col_names to pandas read_csv() function.</p>
${FullCode(`
#import pandas
import pandas as pd
col_names = ['pregnant', 'glucose', 'bp', 'skin', 'insulin', 'bmi', 'pedigree', 'age', 'label']
# load dataset
pima = pd.read_csv("pima-indians-diabetes.csv", header=None, names=col_names)`)}
<p>Show the first five data</p>
${FullCode(`
pima.head()`)}
${ShowImage('74.jpg')}
<h3 id="selecting-feature-here,">Selecting Feature</h3>
<p class="p-margin">Here, you need to divide the given columns into two types of variables dependent(or target variable) and independent variable(or feature variables).</p>
${FullCode(`
#split dataset in features and target variable
feature_cols = ['pregnant', 'insulin', 'bmi', 'age','glucose','bp','pedigree']
X = pima[feature_cols] # Features
y = pima.label # Target variable`)}
<h3 id="splitting-data-tound">Splitting Data</h3>
<p class="p-margin">To understand model performance, dividing the dataset into a training set and a test set is a good strategy.</p>
<p class="p-margin">Let's split the dataset by using the function train_test_split(). You need to pass 3 parameters: features, target, and test_set size. Additionally, you can use random_state to select records randomly.</p>
${FullCode(`
# split X and y into training and testing sets
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=16)`)}
<p class="p-margin">Here, the Dataset is broken into two parts in a ratio of 75:25. It means 75% data will be used for model training and 25% for model testing.</p>
<h3 id="model-development-and-prediction-first">Model Development and Prediction</h3>
<p class="p-margin">First, import the Logistic Regression module and create a Logistic Regression classifier object using the LogisticRegression() function with random_state for reproducibility.</p>
<p class="p-margin">Then, fit your model on the train set using fit() and perform prediction on the test set using predict().&nbsp;</p>
${FullCode(`
# import the class
from sklearn.linear_model import LogisticRegression

# instantiate the model (using the default parameters)
logreg = LogisticRegression(random_state=16)

# fit the model with data
logreg.fit(X_train, y_train)

y_pred = logreg.predict(X_test)`)}
${Note(`The variable ${WordCode('y_pred')} contains the predicted output.`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Model Evaluation using Confusion Matrix"; //title
window["msg"+k] = `
<p class="p-margin">A confusion matrix is a table that is used to evaluate the performance of a classification model. You can also visualize the performance of an algorithm. The fundamental of a confusion matrix is the number of correct and incorrect predictions summed up class-wise.</p>
${FullCode(`
# import the metrics class
from sklearn import metrics

cnf_matrix = metrics.confusion_matrix(y_test, y_pred)
cnf_matrix`)}
${OutputCode(`
array([[115,   8],
    [ 30,  39]])`)}
<p class="p-margin">Here, you can see the confusion matrix in the form of the array object. The dimension of this matrix is 2*2 because this model is binary classification. You have two classes 0 and 1. Diagonal values represent accurate predictions, while non-diagonal elements are inaccurate predictions. In the output, 115 and 39 are actual predictions, and 30 and 8 are incorrect predictions.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Visualizing Confusion Matrix using Heatmap"; //title
window["msg"+k] = `
<p class="p-margin">Let's visualize the results of the model in the form of a confusion matrix using matplotlib and seaborn.</p>
<p class="p-margin">Here, you will visualize the confusion matrix using Heatmap.</p>
${FullCode(`
# import required modules
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

class_names=[0,1] # name  of classes
fig, ax = plt.subplots()
tick_marks = np.arange(len(class_names))
plt.xticks(tick_marks, class_names)
plt.yticks(tick_marks, class_names)
# create heatmap
sns.heatmap(pd.DataFrame(cnf_matrix), annot=True, cmap="YlGnBu" ,fmt='g')
ax.xaxis.set_label_position("top")
plt.tight_layout()
plt.title('Confusion matrix', y=1.1)
plt.ylabel('Actual label')
plt.xlabel('Predicted label')

Text(0.5,257.44,'Predicted label');`)}
${ShowImage('75.png')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Confusion Matrix Evaluation Metrics"; //title
window["msg"+k] = `
${FullCode(`
from sklearn.metrics import classification_report
target_names = ['without diabetes', 'with diabetes']
print(classification_report(y_test, y_pred, target_names=target_names))`)}
${OutputCode(`
precision    recall  f1-score   support

without diabetes       0.79      0.93      0.86       123
   with diabetes       0.83      0.57      0.67        69

        accuracy                           0.80       192
       macro avg       0.81      0.75      0.77       192
    weighted avg       0.81      0.80      0.79       192`)}
<p class="p-margin">Well, you got a classification rate of <strong>80%</strong>, considered as good accuracy.</p>
<p class="p-margin"><strong>Precision</strong>: Precision is about being precise, i.e., how accurate your model is. In other words, you can say, when a model makes a prediction, how often it is correct. In your prediction case, when your Logistic Regression model predicted patients are going to suffer from diabetes, that patients have 73% of the time.</p>
<p class="p-margin"><strong>Recall</strong>: If there are patients who have diabetes in the test set and your Logistic Regression model can identify it 57% of the time.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "ROC Curve"; //title
window["msg"+k] = `
<p class="p-margin">Receiver Operating Characteristic(ROC) curve is a plot of the true positive rate against the false positive rate. It shows the tradeoff between sensitivity and specificity.</p>
${FullCode(`
y_pred_proba = logreg.predict_proba(X_test)[::,1]
fpr, tpr, _ = metrics.roc_curve(y_test,  y_pred_proba)
auc = metrics.roc_auc_score(y_test, y_pred_proba)
plt.plot(fpr,tpr,label="data 1, auc="+str(auc))
plt.legend(loc=4)
plt.show()`)}
${ShowImage('76.png')}
<p class="p-margin">AUC score for the case is 0.88. AUC score 1 represents a perfect classifier, and 0.5 represents a worthless classifier.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Advantages of Logistics Regression"; //title
window["msg"+k] = `
Because of its efficient and straightforward nature, it doesn't require high computation power, is easy to implement, easily interpretable, and used widely by data analysts and scientists. Also, it doesn't require scaling of features. Logistic regression provides a probability score for observations.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Disadvantages of Logistics Regression"; //title
window["msg"+k] = `
Logistic regression is not able to handle a large number of categorical features/variables. It is vulnerable to overfitting. Also, can't solve the non-linear problem with the logistic regression that is why it requires a transformation of non-linear features. Logistic regression will not perform well with independent variables that are not correlated to the target variable and are very similar or correlated to each other.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Difference between Linear Regression and Logistics Regression"; //title
window["msg"+k] = `
<table class="GFGEditorTheme__table">
<colgroup>
<col>
<col>
<col></colgroup>
<thead>
<tr>
<th class="GFGEditorTheme__tableCell GFGEditorTheme__tableCellHeader">
<p dir="ltr"><span>                                  Sr.No</span></p>
</th>
<th class="GFGEditorTheme__tableCell GFGEditorTheme__tableCellHeader">
<p dir="ltr"><span>                        Linear Regresssion</span></p>
</th>
<th class="GFGEditorTheme__tableCell GFGEditorTheme__tableCellHeader">
<p dir="ltr"><span>                     Logistic Regression </span></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<th class="GFGEditorTheme__tableCell GFGEditorTheme__tableCellHeader">
<p><span>1</span></p>
</th>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>Linear regression is used to predict the continuous  dependent variable using a given set of  independent variables. </span></p>
</td>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>Logistic regression is used to predict the categorical  dependent variable using a given set of independent  variables.</span></p>
</td>
</tr>
<tr>
<th class="GFGEditorTheme__tableCell GFGEditorTheme__tableCellHeader">
<p><span>2</span></p>
</th>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>Linear regression is used for solving Regression  problem.</span></p>
</td>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>It is used for solving classification problems.</span></p>
</td>
</tr>
<tr>
<th class="GFGEditorTheme__tableCell GFGEditorTheme__tableCellHeader">
<p><span>3</span></p>
</th>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>In this we predict the value of continuous variables</span></p>
</td>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>In this we predict values of categorical varibles</span></p>
</td>
</tr>
<tr>
<th class="GFGEditorTheme__tableCell GFGEditorTheme__tableCellHeader">
<p><span>4</span></p>
</th>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>In this we find best fit line. </span></p>
</td>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>In this we find S-Curve .</span></p>
</td>
</tr>
<tr>
<th class="GFGEditorTheme__tableCell GFGEditorTheme__tableCellHeader">
<p><span>5</span></p>
</th>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>Least square estimation method is used for  estimation of accuracy. </span></p>
</td>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>Maximum likelihood estimation method is used for  Estimation of accuracy.</span></p>
</td>
</tr>
<tr>
<th class="GFGEditorTheme__tableCell GFGEditorTheme__tableCellHeader">
<p><span>6</span></p>
</th>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>The output must be continuous value,such as  price,age,etc. </span></p>
</td>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>Output is must be categorical value such as 0 or 1, Yes or no, etc.</span></p>
</td>
</tr>
<tr>
<th class="GFGEditorTheme__tableCell GFGEditorTheme__tableCellHeader">
<p><span>7</span></p>
</th>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>It required linear relationship between dependent  and independent variables.  </span></p>
</td>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>It not required linear relationship.</span></p>
</td>
</tr>
<tr>
<th class="GFGEditorTheme__tableCell GFGEditorTheme__tableCellHeader">
<p><span>8</span></p>
</th>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>There may be collinearity between the  independent variables. </span></p>
</td>
<td class="GFGEditorTheme__tableCell">
<p dir="ltr"><span>There should not be collinearity between  independent varible.</span></p>
</td>
</tr>
</tbody>
</table>
`; //message

totalLevel = k;