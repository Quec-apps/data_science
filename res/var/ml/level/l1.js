k=0;

k++;
window["type"+k] = "message";
window["ti"+k] = "What is Machine Learning?"; //title
window["msg"+k] = `
Machine Learning is making the computer learn from studying data and statistics.
<br><br>
Machine Learning is a step into the direction of artificial intelligence (AI).
<br><br>
Machine Learning is a program that analyses data and learns to predict the outcome.

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Where To Start?"; //title
window["msg"+k] = `
In this tutorial we will go back to mathematics and study statistics, and how to calculate important numbers based on data sets.
<br><br>
We will also learn how to use various Python modules to get the answers we need.
<br><br>
And we will learn how to make functions that are able to predict the outcome based on what we have learned.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Data Set"; //title
window["msg"+k] = `
In the mind of a computer, a data set is any collection of data. It can be anything from an array to a complete database.
<br><br>
Example of an array:
${FullCode(`[99,86,87,88,111,86,103,87,94,78,77,85,86]`)}
Example of a database:
<table class="ws-table-all">
<tbody><tr>
<td>Carname</td><td>Color</td><td class="auto-style1">Age</td><td class="auto-style1">Speed</td><td class="auto-style2">AutoPass</td>
</tr>
  <tr>
<td>BMW</td><td>red</td><td class="auto-style1">5</td><td class="auto-style1">99</td><td class="auto-style2">Y</td>
  </tr>
  <tr>
<td>Volvo</td><td>black</td><td class="auto-style1">7</td><td class="auto-style1">86</td><td class="auto-style2">Y</td>
  </tr>
  <tr>
<td>VW</td><td>gray</td><td class="auto-style1">8</td><td class="auto-style1">87</td><td class="auto-style2">N</td>
  </tr>
  <tr>
<td>VW</td><td>white</td><td class="auto-style1">7</td><td class="auto-style1">88</td><td class="auto-style2">Y</td>
  </tr>
  <tr>
<td>Ford</td><td>white</td><td class="auto-style1">2</td><td class="auto-style1">111</td><td class="auto-style2">Y</td>
  </tr>
  <tr>
<td>VW</td><td>white</td><td class="auto-style1">17</td><td class="auto-style1">86</td><td class="auto-style2">Y</td>
  </tr>
  <tr>
<td>Tesla</td><td>red</td><td class="auto-style1">2</td><td class="auto-style1">103</td><td class="auto-style2">Y</td>
  </tr>
  <tr>
<td>BMW</td><td>black</td><td class="auto-style1">9</td><td class="auto-style1">87</td><td class="auto-style2">Y</td>
  </tr>
  <tr>
<td>Volvo</td><td>gray</td><td class="auto-style1">4</td><td class="auto-style1">94</td><td class="auto-style2">N</td>
  </tr>
  <tr>
<td>Ford</td><td>white</td><td class="auto-style1">11</td><td class="auto-style1">78</td><td class="auto-style2">N</td>
  </tr>
  <tr>
<td>Toyota</td><td>gray</td><td class="auto-style1">12</td><td class="auto-style1">77</td><td class="auto-style2">N</td>
  </tr>
  <tr>
<td>VW</td><td>white</td><td class="auto-style1">9</td><td class="auto-style1">85</td><td class="auto-style2">N</td>
  </tr>
  <tr>
<td>Toyota</td><td>blue</td><td class="auto-style1">6</td><td class="auto-style1">86</td><td class="auto-style2">Y</td>
  </tr>
</tbody></table>
By looking at the array, we can guess that the average value is probably around 80 or 90, and we are also able to determine the highest value and the lowest value, but what else can we do?
<br><br>
And by looking at the database we can see that the most popular color is white, and the oldest car is 17 years, but what if we could predict if a car had an AutoPass, just by looking at the other values?
<br><br>
That is what Machine Learning is for! Analyzing data and predicting the outcome!
${Note(`In Machine Learning it is common to work with very large data sets. In this tutorial we will try to make it as easy as possible to understand the different concepts of machine learning, 
and we will work with small easy-to-understand data sets.`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Data Types"; //title
window["msg"+k] = `
To analyze data, it is important to know what type of data we are dealing with.
<br><br>
We can split the data types into three main categories:
<br><br>
 - Numerical
<br><br>
 - Categorical
<br><br>
 - Ordinal
<br><br>
<b>Numerical</b> data are numbers, and can be split into two numerical categories:
<br><br>
<ul>
    <li>Discrete Data</li>
    <ul><li>numbers that are limited to integers. Example: The number of cars passing by.</li></ul>

    <li>Continuous Data</li>
    <ul><li>numbers that are of infinite value. Example: The price of an item, or the size of an item</li></ul>
</ul>
<b>Categorical</b> data are values that cannot be measured up against each other. Example: a color value, or any yes/no values.
<br><br>
<b>Ordinal</b> data are like categorical data, but can be measured up against each other. Example: school grades where A is better than B and so on.
<br><br>
By knowing the data type of your data source, you will be able to know what technique to use when analyzing them.
<br><br>
You will learn more about statistics and analyzing data in the next chapters.
`; //message

totalLevel = k;