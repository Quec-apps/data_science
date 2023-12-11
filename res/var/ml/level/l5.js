//Data Distribution
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Data Distribution"; //title
window["msg"+k] = `
Earlier in this tutorial we have worked with very small amounts of data in our examples, just to understand the different concepts.
<br><br>
In the real world, the data sets are much bigger, but it can be difficult to gather real world data, at least at an early stage of a project.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "How Can we Get Big Data Sets?"; //title
window["msg"+k] = `
To create big data sets <b>for testing</b>, we use the Python module NumPy, which comes with a number of methods to create random data sets, of any size.
${FullCode(`
x = numpy.random.uniform(0.0, 5.0, 250)
print(x)`, `Create an array containing 250 random floats between 0 and 5:`)}
${OutputCode(`
[4.16457941 2.53336934 0.76094645 2.19728824 0.26461522 2.47763846 
 1.01861707 1.81286031 3.31170377 1.82227842 0.9851678  3.39704211 
 2.80936846 3.5178459  2.43532755 2.16588249 0.51356737 2.13931298 
 3.29456667 3.9949609  3.55884565 3.25152112 4.10826858 4.59093062 
 1.10645521 2.00119659 1.35298074 3.19715447 3.9095812  4.49572829 
 0.19396857 1.98504038 3.4434233  1.4264503  2.5929941  1.93930881 
 1.40465862 0.68521082 3.13884087 0.19739132 3.7006942  3.03040889 
 0.44557704 4.93506348 0.01016715 4.49707411 0.0250856  1.6161289 
 4.0614196  0.07539926 0.14178923 3.53735644 2.92626772 4.24309409 
 2.93614483 4.19271678 2.11085992 0.89565608 2.91128253 2.03085369 
 0.25994798 1.52378501 4.62784889 0.88462656 4.34725502 1.90010131 
 2.70673256 4.7833187  3.90638155 2.21866015 3.22971977 4.23391232 
 1.34365916 4.09616657 1.90472694 2.40922049 0.17677846 4.69405223 
 3.37608853 4.21936793 2.32993106 3.2160566  4.29338672 3.8085986 
 0.03532943 0.1336674  3.29150384 3.487193   4.83582545 0.77023456 
 2.9306055  3.45004702 0.95169535 1.59869558 1.99953255 4.45373969 
 0.46106712 0.77225608 2.5982888  2.41894188 4.7730061  2.49255828 
 2.67640541 4.81062781 0.18381472 3.8635721  0.72421463 3.29070047 
 3.21078948 1.97673306 2.23160857 2.14947338 1.57228967 4.03231597 
 1.93193546 4.83317115 4.57366509 2.72148306 2.76236854 2.45620923 
 3.27250864 3.27347015 0.20148648 2.74118186 3.00158603 3.50135538 
 2.75769371 3.21769774 3.76810699 2.05289646 1.41288639 4.97371182 
 1.87598207 0.17278485 4.27510981 0.31476547 0.00893708 1.04915326 
 1.54613005 1.91131455 4.12173165 0.64393556 1.49024513 0.35966727 
 2.38830249 3.59406423 0.67916137 1.18438456 4.4451865  3.99320972 
 1.53586504 4.86559434 4.867244   4.92217506 3.78949487 1.66934268 
 4.0403024  3.61716084 4.0901871  1.48687033 1.10239527 0.37455416 
 2.89031213 3.02845543 2.85232673 2.7275596  4.02031037 2.69293241 
 2.73244605 3.24139436 4.93317182 3.33097023 1.06817254 0.72802594 
 0.47194159 4.71601616 0.91228598 0.53578222 4.6864055  1.82696259 
 2.97684839 4.51509617 2.32623158 4.65218818 0.92864795 2.92965377 
 1.05175105 4.92930102 1.34231746 3.58343988 2.06728736 2.39001083 
 1.68120088 3.73902319 0.96690738 2.60878368 4.20396981 1.49623894 
 2.87431876 4.36249686 0.9025258  3.76298156 3.55854602 4.56100202 
 4.01188567 3.83115035 4.11706811 2.06614667 1.41638643 2.89719905 
 2.06946139 1.52044048 3.54159028 3.95656091 0.42960599 1.09079623 
 2.46292254 4.95074464 3.87291033 2.1211344  3.80070747 0.00888656 
 4.16287847 2.94661859 3.1512899  2.96793599 2.61313196 3.34480097 
 4.8391801  0.74660596 3.55424576 4.63494792 2.34374201 4.51295525 
 4.60275672 2.97788828 3.30910678 1.37742008 0.09007784 4.0066061 
 3.85646881 0.55971376 0.07674231 1.0299027  3.77871601 3.86643305 
 3.06371385 4.01894688 2.00470197 2.14495597]
`)}
${Note('Since the numbers will be chosen randomly, it will change each time you run the code.')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Histogram"; //title
window["msg"+k] = `
To visualize the data set we can draw a histogram with the data we collected.
<br><br>
We will use the Python module Matplotlib to draw a histogram.
<br><br>
You can learn about the Matplotlib module in our Matplotlib Tutorial.
${FullCode(`
import numpy
import matplotlib.pyplot as plt

x = numpy.random.uniform(0.0, 5.0, 250)

plt.hist(x, 5)
plt.show()`, 'Draw a histogram')}
<h4>Result:</h4>
${ShowImage('1.png')}
<h3>Histogram Explained</h3>
We use the array from the example above to draw a histogram with 5 bars.
<br><br>
The first bar represents how many values in the array are between 0 and 1.
<br><br>
The second bar represents how many values are between 1 and 2.
<br><br>
Etc.
<br><br>
Which gives us this result:
<ul>
    <li>52 values are between 0 and 1</li>
    <li>48 values are between 1 and 2</li>
    <li>49 values are between 2 and 3</li>
    <li>51 values are between 3 and 4</li>
    <li>50 values are between 4 and 5</li>
</ul>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Big Data Distributions"; //title
window["msg"+k] = `
An array containing 250 values is not considered very big, but now you know how to create a random set of values, and by changing the parameters, you can create the data set as big as you want.

${FullCode(`
import numpy
import matplotlib.pyplot as plt

x = numpy.random.uniform(0.0, 5.0, 100000)

plt.hist(x, 100)
plt.show()`, 'Create an array with 100000 random numbers, and display them using a histogram with 100 bars:')}
${ShowImage('2.png')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Normal Data Distribution"; //title
window["msg"+k] = `
In the previous chapter we learned how to create a completely random array, of a given size, and between two given values.
<br><br>
In this chapter we will learn how to create an array where the values are concentrated around a given value.
<br><br>
In probability theory this kind of data distribution is known as the <i>normal data distribution</i>, or the <i>Gaussian data distribution</i>, after the mathematician Carl Friedrich Gauss who came up with the formula of this data distribution.
${FullCode(`
import numpy
import matplotlib.pyplot as plt

x = numpy.random.normal(5.0, 1.0, 100000)

plt.hist(x, 100)
plt.show()`, 'A typical normal data distribution:')}
${ShowImage('3.png')}
${Note("A normal distribution graph is also known as the bell curve because of it's characteristic shape of a bell.")}
<h3>Histogram Explained</h3>
We use the array from the ${WordCode('numpy.random.normal()')} method, with 100000 values,  to draw a histogram with 100 bars.
<br><br>
We specify that the mean value is 5.0, and the standard deviation is 1.0.
<br><br>
Meaning that the values should be concentrated around 5.0, and rarely further away than 1.0 from the mean.
<br><br>
And as you can see from the histogram, most values are between 4.0 and 6.0, with a top at approximately 5.0.
`; //message

totalLevel = k;