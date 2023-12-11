//Feature Scaling
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Feature Scaling"; //title
window["msg"+k] = `
Feature Scaling is a technique to standardize the independent features present in the data in a fixed range. It is performed during the data pre-processing. 
<h5>Working:</h5> 
Given a data-set with features- Age, Salary, BHK Apartment with the data size of 5000 people, each having these independent data features. 
<br><br>
Each data point is labeled as: 
<ul>
    <li><b>Class1- YES</b> (means with the given Age, Salary, BHK Apartment feature value one can buy the property)</li>
    <li><b>Class2- NO </b>(means with the given Age, Salary, BHK Apartment feature value one can’t buy the property).</li>
</ul>
Using a dataset to train the model, one aims to build a model that can predict whether one can buy a property or not with given feature values. 
<br><br>
Once the model is trained, an N-dimensional (where N is the no. of features present in the dataset) graph with data points from the given dataset, can be created. The figure given below is an ideal representation of the model.  
${ShowImage('31.jpg')}
As shown in the figure, star data points belong to <b>Class1- Yes</b> and circles represent <b>Class2- No</b> labels, and the model gets trained using these data points. Now a new data point (diamond as shown in the figure) is given and it has different independent values for the 3 features (Age, Salary, BHK Apartment) mentioned above. The model has to predict whether this data point belongs to Yes or No. 
<h5>Prediction of the class of new data points:</h5>
The model calculates the distance of this data point from the centroid of each class group. Finally, this data point will belong to that class, which will have a minimum centroid distance from it. 
<br>The distance can be calculated between centroid and data point using these methods- 
<ul>
    <li><b>Euclidean Distance:</b> It is the square root of the sum of squares of differences between the coordinates (feature values – Age, Salary, BHK Apartment) of data point and centroid of each class. This formula is given by the Pythagorean theorem. ${ShowImage('32.svg')} where x is Data Point value, y is Centroid value and k is no. of feature values, Example: given data set has k = 3    </li>
    <li><b>Manhattan Distance:</b> It is calculated as the sum of absolute differences between the coordinates (feature values) of data point and centroid of each class. ${ShowImage('33.svg')}</li>
    <li><b>Minkowski Distance:</b> It is a generalization of the above two methods. As shown in the figure, different values can be used for finding r.    </li>
</ul>
`; //message

totalLevel = k;