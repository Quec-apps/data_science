k=0;

k++;
window["type"+k] = "message";
window["ti"+k] = "Variables"; //title
window["msg"+k] = `Variables are containers for storing data values.
<h3>Example</h3>
${FullCode(`
x = 5
y = "John"
print(x)
print(y)
`)}
<h3>Output:</h3>
${OutputCode(`
5
John
`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = ""; //title
window["msg"+k] = `
Variables do not need to be declared with any particular type, and can even change type after they have been set.
${FullCode(`
x = 4       # x is of type int
x = "Sally" # x is now of type str
print(x)
`)}
<h3>Output:</h3>
${OutputCode(`
Sally
`)}
<br><br>
*you will learn about 'data types' in upcoming chapters
`; //message

k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
Declare a variable x and assign a value of 15.<br>
${Typing('x')} = ${Typing('15')}
<br><br>
Declare a variable name and assign john as the value.<br>
${Typing('name')} = "${Typing('john')}"
`; //message

k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
<h3>What is the correct syntax for below code?</h3>
${Typing('print')}('Hello World!')
`; //message

totalLevel = k;