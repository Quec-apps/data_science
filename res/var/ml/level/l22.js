//Polynomial Regression
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Polynomial Regression"; //title
window["msg"+k] = `
<p>Polynomial regression is a type of regression analysis in which the relationship between the independent variable x and the dependent variable y is modeled as an n-th degree polynomial. In other words, instead of fitting a linear equation to the data, polynomial regression uses a polynomial equation.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Why Polynomial Regression?"; //title
window["msg"+k] = `
<p>A simple linear regression algorithm only works when the relationship between the data is linear. But suppose we have non-linear data, then linear regression will not be able to draw a best-fit line. Simple regression analysis fails in such conditions. Consider the below diagram, which has a non-linear relationship, and you can see the linear regression results on it, which does not perform well, meaning it does not come close to reality. Hence, we introduce polynomial regression to overcome this problem, which helps identify the curvilinear relationship between independent and dependent variables.</p>
${ShowImage('77.png')}

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "How Does Polynomial Regression Handle Non-Linear Data?"; //title
window["msg"+k] = `
<p>Polynomial regression is a form of Linear regression where only due to the Non-linear relationship between dependent and independent variables, we add some polynomial terms to linear regression to convert it into Polynomial regression.</p>
<p>In polynomial regression, the relationship between the dependent variable and the independent variable is modeled as an nth-degree polynomial function. When the polynomial is of degree 2, it is called a quadratic model; when the degree of a polynomial is 3, it is called a cubic model, and so on.</p>
<p>Suppose we have a dataset where variable X represents the Independent data and Y is the dependent data. Before feeding data to a mode in the preprocessing stage, we convert the input variables into polynomial terms using some degree.</p>
<p>Consider an example my input value is 35, and the degree of a polynomial is 2, so I will find 35 power 0, 35 power 1, and 35 power 2 this helps to interpret the non-linear relationship in data.<br>The equation of polynomials becomes something like this.</p>
<p><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;y = a<sub>0</sub>&nbsp;+ a<sub>1</sub>x<sub>1</sub>&nbsp;+ a<sub>2</sub>x<sub>1</sub><sup>2</sup>&nbsp;+ … + a<sub>n</sub>x<sub>1</sub><sup>n</sup></b></p>
<p>The degree of order which to use is a Hyperparameter, and we need to choose it wisely. But using a high degree of polynomial tries to overfit the data, and for smaller values of degree, the model tries to underfit, so we need to find the optimum value of a degree. Polynomial Regression models are usually fitted with the method of least squares. The least square method minimizes the variance of the coefficients under the Gauss-Markov Theorem.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Why Is Polynomial Regression Called Polynomial Linear Regression?"; //title
window["msg"+k] = `
<p>If you see the equation of polynomial regression carefully, then we can see that we are trying to estimate the relationship between coefficients and y. And the values of x and y are already given to us, only we need to determine coefficients, and the degree of coefficient here is 1 only, and degree one represents simple linear regression Hence, Polynomial Regression is also known as Polynomial Linear Regression as it has a polynomial equation and this is only the simple concept behind this. I hope you got the point right.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Linear Regression Vs. Polynomial Regression"; //title
window["msg"+k] = `
<p>Now we know how polynomial regression works and helps to build a model over non-linear data. Let’s compare both algorithms practically and see the results.</p>
<p>First, we will generate the data using some equation ax^2 + bx + c, and then apply simple linear regression to it to form a linear equation. Then we will apply polynomial regression on top of it, which will make an easy comparison between the practical performance of both algorithms.</p>
<p>Initially, we will try it with only one input column and one output column. After having a brief understanding we will try it on high-dimensional data.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Polynomial Regression With One Variable"; //title
window["msg"+k] = `
<p>let’s make your hands dirty with some practical implementations</p>
<p><b>Step 1: Import all the libraries</b></p>
${FullCode(`
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import r2_score`)}
<p><strong>Step 2: Create and visualize the data</strong></p>
${FullCode(`
import numpy as np
import matplotlib.pyplot as plt

X = 6 * np.random.rand(200, 1) - 3
y = 0.8 * X**2 + 0.9*X + 2 + np.random.randn(200, 1)
#equation used -> y = 0.8x^2 + 0.9x + 2
#visualize the data
plt.plot(X, y, 'b.')
plt.xlabel("X")
plt.ylabel("Y")
plt.show()`)}
<p>We have added some random noise in the data so that while modeling, it does not overfit it.</p>
${ShowImage('78.png')}
<p><strong>Step 3: Split data in the train and test set</strong></p>
${FullCode(`
x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=2)`)}
<p><strong>Step 4: Apply simple linear regression</strong></p>
<p>Now we will analyze the prediction by fitting simple linear regression. We can see how worse the model is performing, It is not capable of estimating the points.</p>
${FullCode(`
lr = LinearRegression()
lr.fit(x_train, y_train)
y_pred = lr.predict(x_test)
print(r2_score(y_test, y_pred))`)}
<p>If you see the score, it will be near 15 percent to 20 percent, which is too much. If you plot the prediction line, it will be the same as we saw above, which is not capable of identifying or estimating the best-fit line.</p>
${FullCode(`
plt.plot(x_train, lr.predict(x_train), color="r")
plt.plot(X, y, "b.")
plt.xlabel("X")
plt.ylabel("Y")
plt.show()`)}
${ShowImage('79.png')}
<p><strong>Step 5: Apply polynomial regression</strong></p>
<p>Now we will convert the input to polynomial terms by using the degree as 2 because of the equation we have used, the intercept is 2. while dealing with real-world problems, we choose degree by heat and trial method.</p>
${FullCode(`
#applying polynomial regression degree 2
poly = PolynomialFeatures(degree=2, include_bias=True)
x_train_trans = poly.fit_transform(x_train)
x_test_trans = poly.transform(x_test)
#include bias parameter
lr = LinearRegression()
lr.fit(x_train_trans, y_train)
y_pred = lr.predict(x_test_trans)
print(r2_score(y_test, y_pred))`)}
<p>After converting to polynomial terms, we fit the linear regression which is now working as polynomial regression. If you print the x_train value and train transformed value, you will see the 3 polynomial terms. And the model is now performing descent well and if you see the coefficients and intercept value. our coefficient was 0.9, and it predicted 0.88 and the intercept was 2 it has given 1.9 which is very close to the original and the model can be said as a generalized model.</p>
${FullCode(`
print(lr.coef_)
print(lr.intercept_)`)}
<p>If we visualize the predicted line across the training data points, we can see how well it identifies the non-linear relationship in data.</p>
${FullCode(`
X_new = np.linspace(-3, 3, 200).reshape(200, 1)
X_new_poly = poly.transform(X_new)
y_new = lr.predict(X_new_poly)
plt.plot(X_new, y_new, "r-", linewidth=2, label="Predictions")
plt.plot(x_train, y_train, "b.",label='Training points')
plt.plot(x_test, y_test, "g.",label='Testing points')
plt.xlabel("X")
plt.ylabel("y")
plt.legend()
plt.show()`)}
${ShowImage('80.png')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Playing With a Polynomial Degree"; //title
window["msg"+k] = `
<p>Now we will design a function that will help you to find the right value for a degree. here we apply all the preprocessing steps we have done above in a function and map the end prediction plot on it. All you need to do to pass is the degree and it will build a model and plot a graph of a particular degree. here we will create a pipeline of preprocessing steps that makes the process streamlined.</p>
${ShowImage('81.png')}
${FullCode(`
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
def polynomial_regression(degree):
    X_new=np.linspace(-3, 3, 100).reshape(100, 1)
    X_new_poly = poly.transform(X_new)
    polybig_features = PolynomialFeatures(degree=degree, include_bias=False)
    std_scaler = StandardScaler()
    lin_reg = LinearRegression()
    polynomial_regression = Pipeline([
            ("poly_features", polybig_features),
            ("std_scaler", std_scaler),
            ("lin_reg", lin_reg),
        ])
    polynomial_regression.fit(X, y)
    y_newbig = polynomial_regression.predict(X_new)
    #plotting prediction line
    plt.plot(X_new, y_newbig,'r', label="Degree " + str(degree), linewidth=2)
    plt.plot(x_train, y_train, "b.", linewidth=3)
    plt.plot(x_test, y_test, "g.", linewidth=3)
    plt.legend(loc="upper left")
    plt.xlabel("X")
    plt.ylabel("y")
    plt.axis([-3, 3, 0, 10])
    plt.show()`)}
<p>when we run the function while passing high degrees like 10, 15, and 20, then the model tries to overfit the data means slowly the prediction line will leave its original essence and try to rely on training data points, and as there is some change in the training path, the line tries to catch the point.</p>
${FullCode(`polynomial_regression(25)`)}
${ShowImage('82.png')}
<p>This is a problem with a High degree of polynomial, which I want to show you practically, so it’s necessary to choose an optimum value of a degree. here I would like to recommend you try a different degree and analyze the results.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Polynomial Regression With Multiple columns"; //title
window["msg"+k] = `
<p>We have seen polynomial regression with one variable. most of the time, there will be many columns in input data, so how to apply polynomial regression and visualize the result in 3-dimensional space. It sometimes feels like a hectic task for most beginners, so let’s crack that out and understand how to perform polynomial regression in 3-d space.</p>
<p><strong>Step 1: Creating a dataset</strong></p>
<p>I am taking 2 input columns and one output column. the approach with multiple columns is the same.</p>
${FullCode(`
# 3D polynomial regression
x = 7 * np.random.rand(100, 1) - 2.8
y = 7 * np.random.rand(100, 1) - 2.8
z = x**2 + y**2 + 0.2*x + 0.2*y + 0.1*x*y +2 + np.random.randn(100, 1)`)}
<p>let’s visualize the data in 3-d space using a 3-D scatter plot (Plotly library).</p>
${FullCode(`
import plotly.express as px
df = px.data.iris()
fig = px.scatter_3d(df, x=x.ravel(), y=y.ravel(), z=z.ravel())
fig.show()`)}
${ShowImage('83.png')}
<p><strong>Step 2: Applying linear regression</strong></p>
<p>first, let’s try to estimate results with simple linear regression for better understanding and comparison.</p>
<ul>
<li>A numpy mesh grid is useful for converting 2 vectors to a coordinating grid, so we can extend this to 3-d instead of 2-d.</li>
<li>Numpy v-stack is used to stack the arrays vertically(row-wise). This is equivalent to concatenating along axis 1.</li>
</ul>
<p>let’s visualize the prediction of linear regression in 3-d space.</p>
${FullCode(`
import plotly.graph_objects as go
fig = px.scatter_3d(df, x=x.ravel(), y=y.ravel(), z=z.ravel())
fig.add_trace(go.Surface(x = x_input, y = y_input, z =z_final ))
fig.show()`)}
${ShowImage('84.png')}
<p><strong>Step 3: Estimating results using polynomial regression</strong></p>
<p>Now we will transform inputs to polynomial terms and see the powers</p>
${FullCode(`
X_multi = np.array([x,y]).reshape(100,2)
poly = PolynomialFeatures(degree=30)
X_multi_trans = poly.fit_transform(X_multi)
print("Input",poly.n_input_features_)
print("Ouput",poly.n_output_features_)
print("Powersn",poly.powers_)`)}
<p>After running the above code, you will get the powers of both x and y, and we can estimate the result as x power 0 and y power 0, x power 1 and y power 0, and so on. let’s apply the regression to these polynomial terms.</p>
${FullCode(`
lr = LinearRegression()
lr.fit(X_multi_trans, z)
X_test_multi = poly.transform(final)
z_final = lr.predict(X_multi_trans).reshape(10,10)`)}
<p>Now when we visualize the results of Polynomial regression, we can see how well the contour has plotted.</p>
${ShowImage('85.png')}
<p>The plot looks beautiful. We can see in some places, the plot is up and down, meaning somewhere it is overfitting the data. So it takes some time to find the generalized term, and you have to do the heat and trial method.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Conclusion"; //title
window["msg"+k] = `
<p>I hope you now understand the intuition and practical implementation behind the algorithm. In this tutorial, we learned that Polynomial Regression is a form of Linear Regression known as a special case of Multiple linear regression, which estimates the relationship as an nth-degree polynomial. Polynomial Regression is sensitive to outliers, so the presence of one or two outliers can also badly affect the performance.</p>
<p><strong>Key Takeaways</strong></p>
<ul>
<li>A polynomial regression model is a machine learning model that can capture non-linear relationships between variables by fitting a non-linear regression line, which may not be possible with simple linear regression.</li>
<li>It is used when linear regression models may not adequately capture the complexity of the relationship.</li>
<li>It can be useful in various fields, such as finance, physics, engineering, and social sciences, where there may be nonlinear relationships between variables.</li>
</ul>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Frequently Asked Questions"; //title
window["msg"+k] = `
<p><b>Q1. What is a polynomial model?</b></p>
<p>A. A polynomial model is a type of regression model in which the relationship between the dependent variable and the independent variable(s) is modeled as an nth-degree polynomial function. In other words, instead of fitting a straight line (as in linear regression), a curve fits the data.</p>
<br><br>
<p><b>Q2. How many degrees of freedom does a polynomial regression have?</b></p>
<p>A. The degrees of freedom in a polynomial regression with degree ‘d’ are equal to the number of coefficients that need to be estimated minus one.</p>
<br><br>
<p><b>Q3. What are some potential limitations or drawbacks of using a polynomial regression model compared to other types of regression models?</b></p>
<p>A. Although polynomial regression is good for modeling a non-linear relationship between the independent and dependent variables, it has some limitations. Here are some of them:<br>– Overfitting: Polynomial regression models can easily become overfit to the data, especially when using high-degree polynomials.<br>– Nonlinear relationships: Polynomial regression models are only appropriate for modeling nonlinear relationships that can be approximated by a polynomial curve.</p>
<br><br>
<p><b>Q4. What is R2 in polynomial regression?</b></p>
<p>R-squared in polynomial regression is a statistical measure that indicates how well a polynomial regression model fits the data. It represents the proportion of the variance in the dependent variable that is predictable from the independent variable(s). Higher R-squared values indicate a better fit.</p>
`; //message

totalLevel = k;