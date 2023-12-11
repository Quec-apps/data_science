//KNN
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "K-Nearest Neighbor(KNN) Algorithm"; //title
window["msg"+k] = `
<p><span>The K-Nearest Neighbors (KNN) algorithm is a robust and intuitive machine learning method employed to tackle classification and regression problems. By capitalizing on the concept of similarity, KNN predicts the label or value of a new data point by considering its K closest neighbours in the training dataset. In this article, we will learn about a supervised learning algorithm (KNN) or the k – Nearest Neighbours, highlighting it’s user-friendly nature.</span></p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "What is the K-Nearest Neighbors Algorithm?"; //title
window["msg"+k] = `
<p>K-Nearest Neighbours is one of the most basic yet essential classification algorithms in Machine Learning. It belongs to the supervised learning domain and finds intense application in pattern recognition, data mining, and intrusion detection.</p>
<p>It is widely disposable in real-life scenarios since it is non-parametric, meaning, it does not make any underlying assumptions about the distribution of data (as opposed to other algorithms such as GMM, which assume a Gaussian distribution of the given data). We are given some prior data (also called training data), which classifies coordinates into groups identified by an attribute.</p>
<p>As an example, consider the following table of data points containing two features:</p>
${ShowImage('86.png')}
<p dir="ltr"><span>Now, given another set of data points (also called testing data), allocate these points to a group by analyzing the training set. Note that the unclassified points are marked as ‘White’.</span></p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Intuition Behind KNN Algorithm"; //title
window["msg"+k] = `
<p dir="ltr"><span>If we plot these points on a graph, we may be able to locate some clusters or groups. Now, given an unclassified point, we can assign it to a group by observing what group its nearest neighbors belong to. This means a point close to a cluster of points classified as ‘Red’ has a higher probability of getting classified as ‘Red’.</span></p>
<p dir="ltr"><span>Intuitively, we can see that the first point (2.5, 7) should be classified as ‘Green’ and the second point (5.5, 4.5) should be classified as ‘Red’.</span></p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Why do we need a KNN algorithm?"; //title
window["msg"+k] = `
<p dir="ltr"><span>(K-NN) algorithm is a versatile and widely used machine learning algorithm that is primarily used for its simplicity and ease of implementation. It does not require any assumptions about the underlying data distribution. It can also handle both numerical and categorical data, making it a flexible choice for various types of datasets in classification and regression tasks. It is a non-parametric method that makes predictions based on the similarity of data points in a given dataset. K-NN is less sensitive to outliers compared to other algorithms.</span></p>
<p dir="ltr"><span>The K-NN algorithm works by finding the K nearest neighbors to a given data point based on a distance metric, such as Euclidean distance. The class or value of the data point is then determined by the majority vote or average of the K neighbors. This approach allows the algorithm to adapt to different patterns and make predictions based on the local structure of the data. </span></p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Distance Metrics Used in KNN Algorithm"; //title
window["msg"+k] = `
<p dir="ltr"><span>As we know that the KNN algorithm helps us identify the nearest points or the groups for a query point. But to determine the closest groups or the nearest points for a query point we need some metric. For this purpose, we use below distance metrics:</span></p>
<h3>Euclidean Distance</h3>
<p>This is nothing but the cartesian distance between the two points which are in the plane/hyperplane. Euclidean distance can also be visualized as the length of the straight line that joins the two points which are into consideration. This metric helps us calculate the net displacement done between the two states of an object.</p>
${ShowImage('87.svg')}
<h3>Manhattan Distance</h3>
<p>Manhattan Distance metric is generally used when we are interested in the total distance traveled by the object instead of the displacement. This metric is calculated by summing the absolute difference between the coordinates of the points in n-dimensions.</p>
${ShowImage('88.svg')}
<h3>Minkowski Distance</h3>
<p>We can say that the Euclidean, as well as the Manhattan distance, are special cases of the Minkowski distance.</p>
${ShowImage('89.svg')}
<p dir="ltr"><span>From the formula above we can say that when p = 2 then it is the same as the formula for the Euclidean distance and when p = 1 then we obtain the formula for the Manhattan distance.</span></p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "How to choose the value of k for KNN Algorithm?"; //title
window["msg"+k] = `
<p>The value of k is very crucial in the KNN algorithm to define the number of neighbors in the algorithm. The value of k in the k-nearest neighbors (k-NN) algorithm should be chosen based on the input data. If the input data has more outliers or noise, a higher value of k would be better. It is recommended to choose an odd value for k to avoid ties in classification. <b>Cross-validation</b> methods can help in selecting the best k value for the given dataset.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Workings of KNN algorithm"; //title
window["msg"+k] = `
<p dir="ltr"><span>Thе K-Nearest Neighbors (KNN) algorithm operates on the principle of similarity, where it predicts the label or value of a new data point by considering the labels or values of its K nearest neighbors in the training dataset.</span></p>
<p dir="ltr"><span>To make predictions, the algorithm calculates the distance between each new data point in the test dataset and all the data points in the training dataset. The Euclidean distance is a commonly used distance metric in K-NN, but other distance metrics, such as Manhattan distance or Minkowski distance, can also be used depending on the problem and data. Once the distances between the new data point and all the data points in the training dataset are calculated, the algorithm proceeds to find the K nearest neighbors based on these distances. Thе specific method for selecting the nearest neighbors can vary, but a common approach is to sort the distances in ascending order and choose the K data points with the shortest distances.</span></p>
<p dir="ltr"><span>After identifying the K nearest neighbors, the algorithm makes predictions based on the labels or values associated with these neighbors. For classification tasks, the majority class among the K neighbors is assigned as the predicted label for the new data point. For regression tasks, the average or weighted average of the values of the K neighbors is assigned as the predicted value. </span></p>
<p dir="ltr"><span>Let X be the training dataset with n data points, where each data point is represented by a d-dimensional feature vector </span><img src="https://quicklatex.com/cache3/a2/ql_8515f0e9751614a0fc39fd10f9f5eda2_l3.svg" class="ql-img-inline-formula quicklatex-auto-format" alt="X_i  " title="Rendered by QuickLaTeX.com" height="22" width="29" style="vertical-align: 29px;"><span> and Y be the corresponding labels or values for each data point in X.Given a new data point x, the algorithm calculates the distance between x and each data point </span><img src="https://quicklatex.com/cache3/a2/ql_8515f0e9751614a0fc39fd10f9f5eda2_l3.svg" class="ql-img-inline-formula quicklatex-auto-format" alt="X_i  " title="Rendered by QuickLaTeX.com" height="22" width="29" style="vertical-align: 29px;"><span> in X using a distance metric, such as Euclidean distance:</span></p>
${ShowImage('90.svg')}
<p dir="ltr"><span>The algorithm selects the K data points from X that have the shortest distances to x. For classification tasks, the algorithm assigns the label y that is most frequent among the K nearest neighbors to x. For regression tasks, the algorithm calculates the average or weighted average of the values y of the K nearest neighbors and assigns it as the predicted value for x. </span></p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Applications of the KNN Algorithm"; //title
window["msg"+k] = `
<ul>
<li value="1"><b><strong>Data Preprocessing</strong></b><span> – While dealing with any Machine Learning problem we first perform the </span><a href="https://www.geeksforgeeks.org/what-is-exploratory-data-analysis/"><span>EDA</span></a><span> part in which if we find that the data contains missing values then there are multiple imputation methods are available as well. One of such method is </span><a href="https://www.geeksforgeeks.org/python-imputation-using-the-knnimputer/"><span>KNN Imputer</span></a><span> which is quite effective ad generally used for sophisticated imputation methodologies.</span></li>
<li value="2"><b><strong>Pattern Recognition</strong></b><span> – KNN algorithms work very well if you have trained a KNN algorithm using the MNIST dataset and then performed the evaluation process then you must have come across the fact that the accuracy is too high.</span></li>
<li value="3"><b><strong>Recommendation Engines</strong></b><span> – The main task which is performed by a KNN algorithm is to assign a new query point to a pre-existed group that has been created using a huge corpus of datasets. This is exactly what is required in the </span><a href="https://www.geeksforgeeks.org/data-mining-and-recommender-systems/"><span>recommender systems</span></a><span> to assign each user to a particular group and then provide them recommendations based on that group’s preferences.</span></li>
</ul>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Advantages of the KNN Algorithm"; //title
window["msg"+k] = `
<ul>
<li value="1"><b><strong>Easy to implement</strong></b><span> as the complexity of the algorithm is not that high.</span></li>
<li value="2"><b><strong>Adapts Easily</strong></b><span> – As per the working of the KNN algorithm it stores all the data in memory storage and hence whenever a new example or data point is added then the algorithm adjusts itself as per that new example and has its contribution to the future predictions as well.</span></li>
<li value="3"><b><strong>Few Hyperparameters</strong></b><span> – The only parameters which are required in the training of a KNN algorithm are the value of k and the choice of the distance metric which we would like to choose from our evaluation metric.</span></li>
</ul>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Disadvantages of the KNN Algorithm"; //title
window["msg"+k] = `
<ul>
<li value="1"><b><strong>Does not scale</strong></b><span> – As we have heard about this that the KNN algorithm is also considered a Lazy Algorithm. The main significance of this term is that this takes lots of computing power as well as data storage. This makes this algorithm both time-consuming and resource exhausting.</span></li>
<li value="2"><b><strong>Curse of Dimensionality</strong></b><span> – There is a term known as the peaking phenomenon according to this the KNN algorithm is affected by the </span><a href="https://www.geeksforgeeks.org/videos/curse-of-dimensionality-in-machine-learning/"><span>curse of dimensionality</span></a><span> which implies the algorithm faces a hard time classifying the data points properly when the dimensionality is too high.</span></li>
<li value="3"><b><strong>Prone to Overfitting</strong></b><span> – As the algorithm is affected due to the curse of dimensionality it is prone to the problem of overfitting as well. Hence generally </span><a href="https://www.geeksforgeeks.org/feature-selection-techniques-in-machine-learning/"><span>feature selection</span></a><span> as well as </span><a href="https://www.geeksforgeeks.org/dimensionality-reduction/"><span>dimensionality reduction</span></a><span> techniques are applied to deal with this problem.</span></li>
</ul>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Implementation of KNN classifier using Sklearn"; //title
window["msg"+k] = `
<p>K-Nearest Neighbors is one of the most basic yet essential classification algorithms in Machine Learning. It belongs to the supervised learning domain and finds intense application in pattern recognition, data mining and intrusion detection. It is widely disposable in real-life scenarios since it is non-parametric, meaning, it does not make any underlying assumptions about the distribution of data (as opposed to other algorithms such as GMM, which assume a Gaussian distribution of the given data).</p>
<p>This article will demonstrate how to implement the <strong>K-Nearest neighbors classifier algorithm</strong> using <a href="https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html" rel="noopener" target="_blank">Sklearn library</a> of Python.</p>
<p><strong>Step 1: Importing the required Libraries</strong></p>
${FullCode(`
import numpy as np 
import pandas as pd 
from sklearn.model_selection import train_test_split 
from sklearn.neighbors import KNeighborsClassifier 
import matplotlib.pyplot as plt  
import seaborn as sns `)}
<p>&nbsp;<br>
<strong>Step 2: Reading the Dataset</strong></p>
${FullCode(`
df = pd.read_csv('data.csv') 
  
y = df['diagnosis'] 
X = df.drop('diagnosis', axis = 1) 
X = X.drop('Unnamed: 32', axis = 1) 
X = X.drop('id', axis = 1) 
# Separating the dependent and independent variable 
  
X_train, X_test, y_train, y_test = train_test_split( 
             X, y, test_size = 0.3, random_state = 0) 
# Splitting the data into training and testing data `)}
<p>&nbsp;<br>
<strong>Step 3: Training the model</strong></p>
${FullCode(`
K = [] 
training = [] 
test = [] 
scores = {} 
  
for k in range(2, 21): 
    clf = KNeighborsClassifier(n_neighbors = k) 
    clf.fit(X_train, y_train) 
  
    training_score = clf.score(X_train, y_train) 
    test_score = clf.score(X_test, y_test) 
    K.append(k) 
  
    training.append(training_score) 
    test.append(test_score) 
    scores[k] = [training_score, test_score]`)}
<p>&nbsp;<br>
<strong>Step 4: Evaluating the model</strong></p>
${FullCode(`
for keys, values in scores.items(): 
    print(keys, ':', values)`)}
${ShowImage('91.png')}
<p>We now try to find the optimum value for ‘k’ ie the number of nearest neighbors.</p>
<p><strong>Step 5: Plotting the training and test scores graph</strong></p>
${FullCode(`
ax = sns.stripplot(K, training); 
ax.set(xlabel ='values of k', ylabel ='Training Score')   
  
plt.show() 
# function to show plot `)}
${ShowImage('92.png')}
${FullCode(`
ax = sns.stripplot(K, test); 
ax.set(xlabel ='values of k', ylabel ='Test Score') 
plt.show() `)}
${ShowImage('93.png')}
${FullCode(`
plt.scatter(K, training, color ='k') 
plt.scatter(K, test, color ='g') 
plt.show()`)}
${ShowImage('94.png')}
<p>From the above scatter plot, we can come to the conclusion that the optimum value of k will be around <b>5</b>.</p>
`; //message

totalLevel = k;