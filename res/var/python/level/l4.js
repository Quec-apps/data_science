//numbers
k=0;

k++;
window["type"+k] = "message";
window["ti"+k] = "Python Numbers"; //title
window["msg"+k] = `
There are three numeric types in Python:
<br><br>
-${WordCode('int')}<br><br>-${WordCode('float')}<br><br>-${WordCode('complex')}
<br><br>
${FullCode(`
x = 1    # int
y = 2.8  # float
z = 1j   # complex
`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Int"; //title
window["msg"+k] = `
Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length.
<h3>Example</h3>
${FullCode(`
x = 1
y = 35656222554887711
z = -3255522
`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Float"; //title
window["msg"+k] = `
Float, or "floating point number" is a number, positive or negative, containing one or more decimals.
<h3>Example</h3>
${FullCode(`
x = 1.10
y = 1.0
z = -35.59
`)}
<br><br>
Float can also be scientific numbers with an "e" to indicate the power of 10.
<h3>Example</h3>
${FullCode(`
x = 35e3
y = 12E4
z = -87.7e100
`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Complex"; //title
window["msg"+k] = `
Complex numbers are written with a "j" as the imaginary part:
<h3>Example</h3>
${FullCode(`
x = 3+5j
y = 5j
z = -5j
`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Type Conversion"; //title
window["msg"+k] = `
You can convert from one type to another with the ${WordCode('int()')}, ${WordCode('float()')}, and ${WordCode('complex()')} methods:
${FullCode(`
x = 1    # int
y = 2.8  # float
z = 1j   # complex

#convert from int to float:
a = float(x)

#convert from float to int:
b = int(y)

#convert from int to complex:
c = complex(x)

print(a)
print(b)
print(c)

print(type(a))
print(type(b))
print(type(c))
`)}
${OutputCode(`
1.0
2
(1+0j)
&lt;class 'float'&gt;
&lt;class 'int'&gt;
&lt;class 'complex'&gt;
`)}
${Note(`You cannot convert complex numbers into another number type.`)}
`; //message

totalLevel = k;