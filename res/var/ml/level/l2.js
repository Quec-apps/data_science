k=0;

k++;
window["type"+k] = "message";
window["ti"+k] = "Machine Learning - Mean Median Mode"; //title
window["msg"+k] = `
What can we learn from looking at a group of numbers?
<br><br>
In Machine Learning (and in mathematics) there are often three values that interests us:
<br><br>
<ul>
  <li>Mean - The average value</li>
  <li>Median - The mid point value</li>
  <li>Mode - The most common value</li>
</ul>
Example: We have registered the speed of 13 cars:
${FullCode(`speed = [99,86,87,88,111,86,103,87,94,78,77,85,86]`)}
What is the average, the middle, or the most common speed value?
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Mean"; //title
window["msg"+k] = `
The mean value is the average value.
<br><br>
To calculate the mean, find the sum of all values, and divide the sum by the number of values:
${FullCode(`(99+86+87+88+111+86+103+87+94+78+77+85+86) / 13 = 89.77`)}
The NumPy module has a method for this. Learn about the NumPy module in our NumPy Tutorial.
${FullCode(`
import numpy
speed = [99,86,87,88,111,86,103,87,94,78,77,85,86]
x = numpy.mean(speed)
print(x)`)}
${OutputCode('89.76923076923077')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Median"; //title
window["msg"+k] = `
The median value is the value in the middle, after you have sorted all the values:
${FullCode(`77, 78, 85, 86, 86, 86, 87, ((87)), 88, 94, 99, 103, 111`)}
${Note('It is important that the numbers are sorted before you can find the median.')}
The NumPy module has a method for this:
${FullCode(`
import numpy
speed = [99,86,87,88,111,86,103,87,94,78,77,85,86]
x = numpy.median(speed)
print(x)`)}
${OutputCode('87.0')}
${Note('If there are two numbers in the middle, divide the sum of those numbers by two.')}
${FullCode(`
77, 78, 85, 86, 86, ((86, 87)), 87, 94, 98, 99, 103

(86 + 87) / 2 = 86.5`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Mode"; //title
window["msg"+k] = `
The Mode value is the value that appears the most number of times:
${FullCode(`99, ((86)), 87, 88, 111, ((86)), 103, 87, 94, 78, 77, 85, ((86)) = 86`)}
`; //message

totalLevel = k;