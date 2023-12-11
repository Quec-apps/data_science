k=0;

k++;
window["type"+k] = "message";
window["ti"+k] = "What is Python?"; //title
window["msg"+k] = `Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.
${ShowImage('1.png')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "What can Python do?"; //title
window["msg"+k] = `
- Python can be used on a server to create web applications.
<br>- Python can be used alongside software to create workflows.
<br>- Python can connect to database systems. It can also read and modify files.
<br>- Python can be used to handle big data and perform complex mathematics.
<br>- Python can be used for rapid prototyping, or for production-ready software development.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Why Python?"; //title
window["msg"+k] = `
- Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).
<br>- Python has a simple syntax similar to the English language.
<br>- Python has syntax that allows developers to write programs with fewer lines than some other programming languages.
<br>- Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.
<br>- Python can be treated in a procedural way, an object-oriented way or a functional way.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Python Syntax"; //title
window["msg"+k] = `
A simple hello world program can be written as:
${FullCode(`print('Hello World!')`)}
${OutputCode('Hello World!')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Python Indentation"; //title
window["msg"+k] = `
Indentation refers to the spaces at the beginning of a code line.
<br><br>
Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important.
<br><br>
Python uses indentation to indicate a block of code.
<h3>Example</h3>
${FullCode(`
if 5 > 2:
    print("Five is greater than two!")`)}
Python will give you an error if you skip the indentation:
<h3>Example</h3>
${FullCode(`
if 5 > 2:
print("Five is greater than two!")`)}
${Note(`You will learn ${WordCode('if')} statement in upcoming chapters.`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Comments"; //title
window["msg"+k] = `
Python has commenting capability for the purpose of in-code documentation.
<br><br>
Comments start with a #, and Python will render the rest of the line as a comment:
<br>
<h3>Example</h3>
${
FullCode(`
#This is a comment.
print("Hello, World!")
`)
}
`; //message

k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
<h3>Print a text to the console</h3>
${Typing('print')}('Hello World!')
`; //message

totalLevel = k;