//Linear Regression
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "What is Linear Regression?"; //title
window["msg"+k] = `
Linear regression is a type of statistical analysis used to predict the relationship between two variables. It assumes a linear relationship between the independent variable and the dependent variable, and aims to find the best-fitting line that describes the relationship. The line is determined by minimizing the sum of the squared differences between the predicted values and the actual values.
<br><br>
Linear regression is commonly used in many fields, including economics, finance, and social sciences, to analyze and predict trends in data. It can also be extended to multiple linear regression, where there are multiple independent variables, and logistic regression, which is used for binary classification problems.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Simple Linear Regression"; //title
window["msg"+k] = `
In a simple linear regression, there is one independent variable and one dependent variable. The model estimates the slope and intercept of the line of best fit, which represents the relationship between the variables. The slope represents the change in the dependent variable for each unit change in the independent variable, while the intercept represents the predicted value of the dependent variable when the independent variable is zero.
<br><br>
Linear regression is a quiet and the simplest statistical regression method used for predictive analysis in machine learning. Linear regression shows the linear relationship between the independent(predictor) variable i.e. X-axis and the dependent(output) variable i.e. Y-axis, called linear regression. If there is a single input variable X(independent variable), such linear regression is called simple linear regression.
${ShowImage('40.jpg')}
The graph above presents the linear relationship between the output(y) and predictor(X) variables.  The blue line is referred to as the best-fit straight line. Based on the given data points, we attempt to plot a line that fits the points the best.
<br><br>
To calculate best-fit line linear regression uses a traditional slope-intercept form which is given below,
<br><br>
<b>Y<sub>i </sub>=&nbsp;<span style="font-size: 14px; text-align: left;">β<sub>0</sub> +&nbsp;β<sub>1</sub>X<sub>i&nbsp;</sub></span></b>
<br><br> 
where<br> Y<sub>i</sub>&nbsp;= Dependent variable,<br><b style="font-size: 14px; text-align: left;">β<sub>0</sub></b>&nbsp;= constant/Intercept,<br><b style="font-size: 14px; text-align: left;">β<sub>1</sub></b>&nbsp;= Slope/Intercept,<br><b style="font-size: 14px; text-align: left;">X<sub>i</sub></b>&nbsp;= Independent variable.
<br><br>
This algorithm explains the linear relationship between the dependent(output) variable y and the independent(predictor) variable X using a straight line  <i>Y= B<sub>0</sub> + B<sub>1</sub> X</i>.
${ShowImage('41.jpg')}
But how the linear regression finds out which is the best fit line?
<br><br>
The goal of the linear regression algorithm is to get the <b>best values for B<sub>0</sub> and B<sub>1</sub></b> to find the best fit line. The best fit line is a line that has the least error which means the error between predicted values and actual values should be minimum.
<h4>Random Error(Residuals)</h4
In regression, the difference between the observed value of the dependent variable(yi) and the predicted value(predicted) is called the residuals.
<p class="has-text-align-center"><b style="font-size: 14px; text-align: left;">ε<sub>i </sub>=&nbsp;</b>&nbsp;<b style="font-size: 14px; text-align: left;">y<sub>predicted</sub></b>&nbsp;–&nbsp; &nbsp;<b style="font-size: 14px; text-align: left;">y<sub>i</sub></b></p>
<p><b>where&nbsp;</b><b style="font-size: 14px; text-align: left;">y<sub>predicted</sub></b><b>&nbsp;=&nbsp; &nbsp;B<sub>0</sub> + B<sub>1</sub> X<sub>i</sub></b></p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "What is the best fit line?"; //title
window["msg"+k] = `
In simple terms, the best fit line is a line that fits the given scatter plot in the best way. Mathematically, the best fit line is obtained by minimizing the Residual Sum of Squares(RSS).
${ShowImage('40.jpg')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Cost Function for Linear Regression"; //title
window["msg"+k] = `
The cost function helps to work out the optimal values for B0 and B1, which provides the best fit line for the data points.
<p>In Linear Regression, generally&nbsp;<strong>Mean Squared Error (MSE)</strong>&nbsp;cost function is used, which is the average of squared error that occurred between the&nbsp;<strong>y<sub>predicted</sub></strong>&nbsp;and&nbsp;<strong>y<sub>i</sub></strong>.</p>
<p>We calculate MSE using simple linear equation y=mx+b:</p>
${ShowImage('42.jpg')}
<p>Using the MSE function, we’ll update the values of B<sub>0</sub>&nbsp;and B<sub>1</sub>&nbsp;such that the MSE value settles at the minima. &nbsp;These parameters can be determined using the gradient descent method such that the value for the cost function is minimum.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Gradient Descent for Linear Regression"; //title
window["msg"+k] = `
<p>Gradient Descent is one of the optimization algorithms that optimize the cost function(objective function) to reach the optimal minimal solution. To find the optimum solution we need to reduce the cost function(MSE) for all data points. This is done by updating the values of&nbsp;<span style="font-size: 14px; text-align: left;">B</span><sub style="text-align: left;">0</sub><span style="font-size: 14px; text-align: left;"> and B</span><sub style="text-align: left;">1</sub>&nbsp;iteratively until we get an optimal solution.</p>
<p>A regression model optimizes the gradient descent algorithm to update the coefficients of the line by reducing the cost function by randomly selecting coefficient values and then iteratively updating the values to reach the minimum cost function.</p>
${ShowImage('43.jpg')}
<p>Let’s take an example to understand this. Imagine a U-shaped pit. And you are standing at the uppermost point in the pit, and your motive is to reach the bottom of the pit. Suppose there is a treasure at the bottom of the pit, and you can only take a discrete number of steps to reach the bottom. If you opted to take one step at a time, you would get to the bottom of the pit in the end but, this would take a longer time. If you decide to take larger steps each time, you may achieve the bottom sooner but, there’s a probability that you could overshoot the bottom of the pit and not even near the bottom. In the gradient descent algorithm, the number of steps you’re taking can be considered as the <b>learning rate</b>, and this decides how fast the algorithm <b class="">converges</b> to the minima.</p>
${ShowImage('44.jpg')}
<p>To update B<sub>0</sub> and B<sub>1</sub>, we take gradients from the cost function. To find these gradients, we take partial derivatives for B<sub>0</sub> and B<sub>1</sub>.</p>
${ShowImage('45.jpg')}
<p>We need to minimize the cost function J. One of the ways to achieve this is to apply the batch gradient descent algorithm. In batch gradient descent, the values are updated in each iteration. (Last two equations shows the updating of values)</p>
<p>The partial derivates are the gradients, and they are used to update the values of B<sub>0</sub> and B<sub>1</sub>. Alpha is the learning rate.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Evaluation Metrics for Linear Regression"; //title
window["msg"+k] = `
<p>The strength of any linear regression model can be assessed using various evaluation metrics. These evaluation metrics usually provide a measure of how well the observed outputs are being generated by the model.</p>
<p>The most used metrics are,</p>
<ol>
<li>Coefficient of Determination or R-Squared (R2)</li>
<li>Root Mean Squared Error (RSME) and Residual Standard Error (RSE)</li>
</ol>
<h3>Coefficient of Determination or R-Squared (R2)</h3>
<p>R-Squared is a number that explains the amount of variation that is explained/captured by the developed model. It always ranges between 0 &amp; 1 . Overall, the higher the value of R-squared, the better the model fits the data.</p>
<p>Mathematically it can be represented as,</p>
<p><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;R<sup>2</sup>&nbsp;= 1 – ( RSS/TSS )&nbsp;</b></p>
<ul>
<li><b>Residual sum of Squares (RSS)</b> is defined as the sum of squares of the residual for each data point in the plot/data. It is the measure of the difference between the expected and the actual observed output.</li>
</ul>
${ShowImage('46.jpg')}
<ul>
<li><b class="">Total Sum of Squares (TSS)</b> is defined as the sum of errors of the data points from the mean of the response variable. Mathematically TSS is,</li>
</ul>
${ShowImage('47.webp')}
<p>where y hat is the mean of the sample data points.</p>
<p>The significance of R-squared is shown by the following figures,</p>
${ShowImage('48.jpg')}
<h3>Root Mean Squared Error&nbsp;</h3>
<p>The Root Mean Squared Error is the square root of the variance of the residuals. It specifies the absolute fit of the model to the data i.e. how close the observed data points are to the predicted values. Mathematically it can be represented as,</p>
${ShowImage('49.jpg')}
<p>To make this estimate unbiased, one has to divide the sum of the squared residuals by the <b>degrees of freedom</b> rather than the total number of data points in the model. This term is then called the <b>Residual Standard Error(RSE)</b>. Mathematically it can be represented as,</p>
${ShowImage('50.jpg')}
<p>R-squared is a better measure than RSME. Because the value of&nbsp;Root Mean Squared Error depends on the units of the variables (i.e. it is not a normalized measure), it can change with the change in the unit of the variables.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Assumptions of Linear Regression"; //title
window["msg"+k] = `
<p>Regression is a parametric approach, which means that it makes assumptions about the data for the purpose of analysis. For successful regression analysis, it’s essential to validate the following assumptions.</p>
<ol>
<li><strong>&nbsp;Linearity of residuals</strong>:&nbsp;There needs to be a linear relationship between the dependent variable and independent variable(s).</li>
</ol>
${ShowImage('51.jpg')}
<p><span style="font-size: 16px; text-align: justify;"><i>2. </i><b><u>Independence of residuals: </u></b>The error terms should not be dependent on one another (like&nbsp;</span><span style="font-size: 16px; text-align: justify;">in time-series data wherein the next value is dependent on the previous one). There&nbsp;</span><span style="font-size: 16px; text-align: justify;">should be no correlation between the residual terms. The absence of this phenomenon is known as <b>Autocorrelation.</b></span></p>
<p><span style="font-size: 16px; text-align: justify;">There should not be any visible patterns in the error terms.</span></p>
${ShowImage('52.jpg')}
<p><span style="font-size: 16px; text-align: justify;"><b>3.&nbsp;<u>Normal distribution of residuals:</u></b> The mean of residuals should follow a normal distribution&nbsp;</span><span style="font-size: 16px; text-align: justify;">with a mean equal to zero or close to zero. This is done in order to check whether the selected line is actually the line of best fit or not.<br></span>If the error terms are non-normally distributed, suggests that there are a few unusual data points that must be studied closely to make a better model.</p>
${ShowImage('53.jpg')}
<p><strong>4. The equal variance of residuals:</strong>&nbsp;The error terms must have constant variance. This phenomenon is known as&nbsp;<strong>Homoscedasticity</strong>.</p>
<p>The presence of non-constant variance in the error terms is referred to as&nbsp;<strong>Heteroscedasticity</strong>. Generally, non-constant variance arises in the presence of&nbsp;<em>outliers or extreme leverage values</em>.</p>
${ShowImage('54.jpg')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Hypothesis in Linear Regression"; //title
window["msg"+k] = `
<p>Once you have fitted a straight line on the data, you need to ask, “<strong>Is this straight line a significant fit for&nbsp;</strong><strong>the data?</strong>” Or “I<strong>s the</strong>&nbsp;<strong>beta coefficient explain the&nbsp;</strong><strong>variance in the data plotted?”&nbsp;</strong>And here comes the idea of&nbsp;<strong>hypothesis testing</strong>&nbsp;on the beta coefficient. The Null and Alternate hypotheses in this case are:</p>
<p>H<sub>0</sub>: B<sub>1</sub>&nbsp;= 0</p>
<p>H<sub>A</sub>: B<sub>1</sub>&nbsp;<strong>≠</strong>&nbsp;0</p>
<p>To test this hypothesis we use a&nbsp;<strong>t-test,&nbsp;</strong>test statistics for the beta coefficient is given by,</p>
${ShowImage('55.svg')}
<h3>Assessing the model fit</h3>
<p>Some other parameters to assess a model are:</p>
<ol>
<li><strong>t statistic:</strong>&nbsp;It is used to determine the p-value and hence, helps in determining whether the coefficient is significant or not</li>
<li><strong>F statistic</strong>: It is used to assess whether the overall model fit is significant or not. Generally, the higher the value of the F-statistic, the more significant a model turns out to be.</li>
</ol>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Multiple Linear Regression"; //title
window["msg"+k] = `
<p>Multiple linear regression is a technique to understand the relationship between a&nbsp;<em>single&nbsp;</em>dependent variable and&nbsp;<em>multiple&nbsp;</em>independent variables.</p>
<p>The formulation for multiple linear regression is also similar to simple linear regression with</p>
<p>the small change that instead of having one beta variable, you will now have betas for all the variables used. The formula is given as:</p>
<p>&nbsp;Y = B<sub>0</sub>&nbsp;+ B<sub>1</sub>X<sub>1</sub>&nbsp;+ B<sub>2</sub>X<sub>2</sub>&nbsp;+ … + B<sub>p</sub>X<sub>p</sub>&nbsp;+&nbsp;<strong>ε</strong></p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Considerations of Multiple Linear Regression"; //title
window["msg"+k] = `
<p>All the four assumptions made for Simple Linear Regression still hold true for Multiple Linear Regression along with a few new additional assumptions.</p>
<ol>
<li><strong><u>Overfitting</u></strong>: When more and more variables are added to a model, the model may become far too complex and usually ends up memorizing all the data points in the training set. This phenomenon is known as the overfitting of a model. This usually leads to high training accuracy and very low test accuracy.</li>
<li><strong><u>Multicollinearity</u></strong>: It is the phenomenon where a model with several independent variables, may have some variables interrelated.</li>
<li><strong><u>Feature Selection:</u></strong>&nbsp;With more variables present, selecting the optimal set of predictors from the pool of given features (many of which might be redundant) becomes an important task for building a relevant and better model.</li>
</ol>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Multicollinearity"; //title
window["msg"+k] = `
<p>As multicollinearity makes it difficult to find out which variable is actually contributing towards the prediction of the response variable, it leads one to conclude incorrectly, the effects of a variable on the target variable.&nbsp; Though it does not affect the precision of the predictions, it is essential to properly detect and deal with the multicollinearity present in the model, as random removal of any of these correlated variables from the model causes the coefficient values to swing wildly and even change signs.</p>
<p>Multicollinearity can be detected using the following methods.</p>
<ol>
<li><strong><u>Pairwise Correlations:</u></strong>&nbsp;Checking the pairwise correlations between different pairs of independent variables can throw useful insights in detecting multicollinearity.</li>
<li><strong><u>Variance Inflation Factor (VIF):</u></strong>&nbsp;Pairwise correlations may not always be useful as it is possible that just one variable might not be able to completely explain some other variable but some of the variables combined could be ready to do this. Thus, to check these sorts of relations between variables, one can use VIF. VIF basically explains the relationship of one independent variable with all the other independent variables. VIF is given by,</li>
</ol>
${ShowImage('56.webp')}
<p><span style="font-size: 16px; text-align: justify; font-style: italic;">where&nbsp;</span><span style="font-size: 16px; text-align: justify;"><i>i</i> refers to the<i> i</i></span><sup style="text-align: justify;"><i>th</i></sup><span style="font-size: 16px; text-align: justify;"> variable which is being represented as a linear combination of the rest of the independent variables.</span></p>
<p>The common heuristic followed for the VIF values is if VIF &gt; 10 then the value is definitely high and it should be dropped. And if the VIF=5 then it may be valid but should be inspected first. If VIF &lt; 5, then it is considered a good vif value.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Overfitting and Underfitting in Linear Regression"; //title
window["msg"+k] = `
<p>There have always been situations where a model performs well on training data but not on the test data.&nbsp;While training models on a dataset, overfitting, and underfitting are the most common problems faced by people.&nbsp;</p>
<p>Before understanding overfitting and underfitting one must know about bias and variance.</p>
<p><b><u>Bias:</u></b></p>
<p>Bias is a measure to determine how accurate is the model likely to be on future unseen data. Complex models,&nbsp;&nbsp;assuming there is enough training data available, can do predictions accurately. Whereas the models&nbsp;that are too naive, are very likely to perform badly with respect to predictions.&nbsp;Simply, Bias is errors made by training data.&nbsp;</p>
<p>Generally, linear algorithms have a high bias which makes them fast to learn and easier to understand but in general, are less flexible. Implying lower predictive performance on complex problems that fail to meet the expected outcomes.</p>
<p><b><u>Variance:</u></b></p>
<p>Variance is the sensitivity of the model towards training data, that is it quantifies how much the model will react when input data is changed.</p>
<p>Ideally, the model shouldn’t change too much from one training dataset to the next training data, which will mean that the algorithm is good at picking out the hidden underlying patterns between the inputs and the output variables.</p>
<p>Ideally, a model should have lower variance which means that the model doesn’t change drastically after changing the training data(it is generalizable). Having higher variance will make a model change drastically even on a small change in the training dataset.</p>
<p>Let’s understand what is a bias-variance tradeoff is.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Bias Variance Tradeoff"; //title
window["msg"+k] = `
<p>The aim of any supervised machine learning algorithm is to achieve low bias and low variance as it is more robust. So that the algorithm should achieve better performance.<b><u><br></u></b></p>
<p>There is no escape from the relationship between bias and variance in machine learning.</p>
${ShowImage('57.jpg')}
<p>There is an inverse relationship between bias and variance,</p>
<ul>
<li>An increase in bias will decrease the variance.</li>
<li>An increase in the variance will decrease the bias.</li>
</ul>
<p>There is a trade-off that plays between these two concepts and the algorithms must find a balance between bias and variance.</p>
<p>As a matter of fact, one cannot calculate the real bias and variance error terms because we do not know the actual underlying target function.</p>
<p>Now coming to the overfitting and underfitting.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Overfitting"; //title
window["msg"+k] = `
<p id="e301">When a model learns each and every pattern and noise in the data to such extent that it affects the performance of the model on the unseen future dataset, it is referred to as <i><b>overfitting</b></i>. The model fits the data so well that it interprets noise as patterns in the data.</p>
<p id="4ae2">When a model has low bias and higher variance it ends up memorizing the data and causing overfitting.&nbsp;<span style="font-size: 14px; text-align: left;">Overfitting causes the model to become</span><span style="font-size: 14px; text-align: left;">&nbsp;specific rather than generic. This usually leads to high training accuracy and very low</span><span style="font-size: 14px; text-align: left;">&nbsp;test accuracy.</span></p>
<p id="4ae2">Detecting overfitting is useful, but it doesn’t solve the actual problem. There are several ways to prevent overfitting, which are stated below:<span style="font-size: 14px; text-align: left;"><br></span></p>
<ul>
<li>Cross-validation</li>
<li>If the training data is too small to train add more relevant and clean data.</li>
<li>If the training data is too large, do some feature selection and remove unnecessary features.</li>
<li>Regularization</li>
</ul>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Underfitting"; //title
window["msg"+k] = `
<p id="8c64">Underfitting is not often discussed as often as overfitting is discussed. When the model fails to learn from the training dataset and is also not able to generalize the test dataset, is referred to as <b><i>underfitting</i></b>. This type of problem can be very easily detected by the performance metrics.</p>
<p id="8c64">When a model has high bias and low variance it ends up not generalizing the data and causing underfitting. It is unable to find the hidden underlying patterns from the data. This usually leads to low training accuracy and very low test accuracy. The ways to prevent underfitting are stated below,</p>
<ul>
<li>Increase the model complexity</li>
<li>Increase the number of features in the training data</li>
<li>Remove noise from the data.</li>
</ul>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Coding: Linear Regression Model"; //title
window["msg"+k] = `
<p>This is the section where you’ll find out how to perform the regression in Python. We will use&nbsp;<strong><em><u>Advertising sales channel prediction data</u>. You can access the data&nbsp;<a href="https://www.kaggle.com/ashydv/sales-prediction-simple-linear-regression/notebook" target="_blank">here</a>.</em></strong></p>
<table><tbody><tr><td><strong>TV</strong></td><td><strong>Radio</strong></td><td><strong>Newspaper</strong></td><td><strong>Sales</strong></td></tr><tr><td>230.1</td><td>37.8</td><td>69.2</td><td>22.1</td></tr><tr><td>44.5</td><td>39.3</td><td>45.1</td><td>10.4</td></tr><tr><td>17.2</td><td>45.9</td><td>69.3</td><td>12.0</td></tr><tr><td>151.5</td><td>41.3</td><td>58.5</td><td>16.5</td></tr><tr><td>180.8</td><td>10.8</td><td>58.4</td><td>17.9</td></tr><tr><td>8.7</td><td>48.9</td><td>75.0</td><td>7.2</td></tr><tr><td>57.5</td><td>32.8</td><td>23.5</td><td>11.8</td></tr></tbody></table>
<p><strong>‘Sales’&nbsp;</strong>is the target variable that needs to be predicted. Now, based on this data, our objective is to create a predictive model, that predicts sales based on the money spent on different platforms for marketing.</p>
<p>Let us straightaway get right down to some hands-on coding to get this prediction done. Please don’t feel overlooked if you do not have experience with Python. In fact, the best way to learn is to get your hands dirty by solving a problem – like the one we are doing.</p>
<h3 class="wp-block-heading" id="tab-con-8">Step 1: Importing Python Libraries</h3>
<p>The first step is to fire up your Jupyter notebook and load all the prerequisite libraries in your Jupyter notebook. Here are the important libraries that we will be needing for this linear regression.</p>
<ul>
<li><strong>NumPy&nbsp;</strong>(to perform certain mathematical operations)</li>
<li><strong>pandas&nbsp;</strong>(to storethe data&nbsp; in a pandas DataFrames)</li>
<li><strong>matplotlib.pyplot</strong>&nbsp;(you will use matplotlib to plot the data)</li>
</ul>
<p>In order to load these, just start with these few lines of codes in your first cell:</p>
${FullCode(`
#Importing all the necessary libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
# Supress Warnings
import warnings 
warnings.filterwarnings('ignore')
`)}
${Note('The last line of code helps in suppressing the unnecessary warnings.')}
<h3 class="wp-block-heading" id="tab-con-8">Step 2: Loading the Dataset</h3>
<p>Let us now import data into a DataFrame. A DataFrame is a data type in Python. The simplest way to understand it would be that it stores all your data in tabular format.</p>
${FullCode(`
#Read the given CSV file, and view some sample records
advertising = pd.read_csv( "advertising.csv" )
advertising.head()`)}
<h3>Output:</h3>
<table><tbody><tr><td><strong>TV</strong></td><td><strong>Radio</strong></td><td><strong>Newspaper</strong></td><td><strong>Sales</strong></td></tr><tr><td>230.1</td><td>37.8</td><td>69.2</td><td>22.1</td></tr><tr><td>44.5</td><td>39.3</td><td>45.1</td><td>10.4</td></tr><tr><td>17.2</td><td>45.9</td><td>69.3</td><td>12.0</td></tr><tr><td>151.5</td><td>41.3</td><td>58.5</td><td>16.5</td></tr><tr><td>180.8</td><td>10.8</td><td>58.4</td><td>17.9</td></tr><tr><td>8.7</td><td>48.9</td><td>75.0</td><td>7.2</td></tr><tr><td>57.5</td><td>32.8</td><td>23.5</td><td>11.8</td></tr></tbody></table>
<h3 class="wp-block-heading" id="tab-con-10">Step 3: Visualization</h3>
<p>Let us plot the scatter plot for target variable vs. predictor variables in a single plot to get the intuition. Also, plotting a heatmap for all the variables,</p>
${FullCode(`
#Importing seaborn library for visualizations
import seaborn as sns
#to plot all the scatterplots in a single plot
sns.pairplot(advertising, x_vars=[ 'TV', ' Newspaper.,'Radio' ], y_vars = 'Sales', size = 4, kind = 'scatter' )
plt.show()
#To plot heatmap to find out correlations
sns.heamap( advertising.corr(), cmap = 'YlGnBl', annot = True )
plt.show()`)}
${ShowImage('58.jpg')}
<p>From the scatterplot and the heatmap, we can observe that ‘Sales’ and ‘TV’ have a higher correlation as compared to others because it shows a linear pattern in the scatterplot as well as giving 0.9 correlation.</p>
<p>You can go ahead and play with the visualizations and can find out interesting insights from the data.</p>
<h3 class="wp-block-heading" id="tab-con-10">Step 4: Performing Simple Linear Regression</h3>
<p>Here, as the TV and Sales have a higher correlation we will perform the simple linear regression for these variables.</p>
<p>We can use sklearn or statsmodels to apply linear regression. So we will go ahead with&nbsp;<strong>statmodels</strong>.</p>
<p>We first assign the feature variable, 'TV', during this case, to the variable 'X' and the response variable, 'Sales', to the variable 'y'</p>
${FullCode(`
X = advertising[ 'TV' ]
y = advertising[ 'Sales' ]`)}
<p>And after assigning the variables you need to split our variable into training and testing sets. You’ll perform this by importing&nbsp;<code>train_test_split</code>&nbsp;from the&nbsp;<code>sklearn.model_selection</code>&nbsp;library. It is usually a good practice to keep 70% of the data in your train dataset and the rest 30% in your test dataset.</p>
${FullCode(`
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split( X, y, train_size = 0.7, test_size = 0.3, random_state = 100 )`)}
<p>In this way, you can split the data into train and test sets.</p>
<p>One can check the shapes of train and test sets with the following code,</p>
${FullCode(`
print( X_train.shape )
print( X_test.shape )
print( y_train.shape )
print( y_test.shape )`)}
${OutputCode(`
(140,)
(60,)
(140,)
(60,)`)}
${FullCode(`
#Convert X_train and X_test into 2D array
X_train, X_test = X_train.values.reshape(-1, 1), X_test.values.reshape(-1, 1)`)}
<p>Its time to fit our model to the training dataset. To do so, we will import the <strong>LinearRegression</strong> class of the <strong>linear_model</strong> library from the <strong>scikit learn</strong>. After importing the class, we are going to create an object of the class named as a <strong>regressor</strong>. The code for this is given below:</p>
${FullCode(`
#Fitting the Simple Linear Regression model to the training dataset  
from sklearn.linear_model import LinearRegression  
regressor= LinearRegression()  
regressor.fit(x_train, y_train)`)}
<p>Now lets predict the value and check the score of the model.</p>
${FullCode(`
from sklearn.metrics import mean_squared_error, r2_score

# Predicting on the training set
y_train_pred = regressor.predict(X_train)

# Predicting on the test set
y_test_pred = regressor.predict(X_test)

# Model evaluation
train_rmse = np.sqrt(mean_squared_error(y_train, y_train_pred))
test_rmse = np.sqrt(mean_squared_error(y_test, y_test_pred))

train_r2 = r2_score(y_train, y_train_pred)
test_r2 = r2_score(y_test, y_test_pred)

print('RMSE of train data is',train_rmse)
print('RMSE of test data is',test_rmse)

print('R2 of train data is',train_r2)
print('R2 of test data is',test_r2)`)}
${OutputCode(`
RMSE of train data is 2.3984162246129914
RMSE of test data is 2.019296008966231
R2 of train data is 0.8157933136480389
R2 of test data is 0.7921031601245662`)}
${Note(`${WordCode('y_train_pred')} and ${WordCode('y_test_pred')} contain the predicted values. You can print these variable to show what model predicted for each data points`)}
<p>Lets find the slope and intercept of this model</p>
${FullCode(`
# Get the coefficients and intercept
coefficients = regressor.coef_
intercept = regressor.intercept_

print("Coefficients:", coefficients)
print("Intercept:", intercept)`)}
${OutputCode(`
Coefficients: [0.05454575]
Intercept: 6.948683200001357`)}
<p>Do you remember the equation for regression line:</p>
<b>Y<sub>i </sub>=&nbsp;<span style="font-size: 14px; text-align: left;">β<sub>0</sub> +&nbsp;β<sub>1</sub>X<sub>i&nbsp;</sub></span></b>
<p>${WordCode('regressor.intercept_')} is the y-intercept, ie β<sub>0</sub></p>
<p>${WordCode('regressor.coef_')} is the slope, ie β<sub>1</sub></p>
<p>So substituting the equation Y<sub>i </sub>=&nbsp;<span style="font-size: 14px; text-align: left;">β<sub>0</sub> +&nbsp;β<sub>1</sub>X<sub>i&nbsp;</sub></span> <br>
we get, Y<sub>i </sub>=&nbsp;<span style="font-size: 14px; text-align: left;">6.948683200001357 +&nbsp;0.05454575 * X<sub>i&nbsp;</sub></span>
</p>
<p>When we give a value to X<sub>i&nbsp;</sub> ie input variable, we can solve the equation to get output variable Y<sub>i </sub></p>
`; //message

totalLevel = k;