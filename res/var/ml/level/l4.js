//percentile
k=0;

k++;
window["type"+k] = "message";
window["ti"+k] = "Percentiles"; //title
window["msg"+k] = `
Percentiles are used in statistics to give you a number that describes the value that a given percent of the values are lower than.
<br><br>
Example: Let's say we have an array of the ages of all the people that live in a street.
${FullCode(`ages = [5,31,43,48,50,41,7,11,15,39,80,82,32,2,8,6,25,36,27,61,31]`)}
What is the 75. percentile? The answer is 43, meaning that 75% of the people are 43 or younger.
<br><br>
The NumPy module has a method for finding the specified percentile:
${FullCode(`
import numpy

ages = [5,31,43,48,50,41,7,11,15,39,80,82,32,2,8,6,25,36,27,61,31]
x = numpy.percentile(ages, 75)
print(x)`, `Use the NumPy ${WordCode('percentile()')} method to find the percentiles:`)}
${OutputCode('43.0')}
${FullCode(`
import numpy

ages = [5,31,43,48,50,41,7,11,15,39,80,82,32,2,8,6,25,36,27,61,31]
x = numpy.percentile(ages, 90)
print(x)`, 'What is the age that 90% of the people are younger than?')}
${OutputCode('61.0')}
`; //message

totalLevel = k;