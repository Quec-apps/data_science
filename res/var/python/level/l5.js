//string
k=0;

k++;
window["type"+k] = "message";
window["ti"+k] = "Python Strings"; //title
window["msg"+k] = `
Strings in python are surrounded by either single quotation marks, or double quotation marks.

${WordCode(`'hello'`)} is the same as ${WordCode(`"hello"`)}.
<h3>Example:</h3>
${FullCode(`
a = "Hello"
b = 'Hi'
`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Multiline Strings"; //title
window["msg"+k] = `
You can assign a multiline string to a variable by using three quotes:
<h3>Example:</h3>
${FullCode(`
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
`)}
Or three single quotes:
${FullCode(`
a = '''Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.'''
`)}
${Note('in the result, the line breaks are inserted at the same position as in the code.')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Strings are Arrays"; //title
window["msg"+k] = `
Like many other popular programming languages, strings in Python are arrays of bytes representing unicode characters.
<br><br>
However, Python does not have a character data type, a single character is simply a string with a length of 1.
<br><br>
Square brackets can be used to access elements of the string.
<br>
${FullCode(`
a = "Hello, World!"
print(a[1])
print(a[0])`)}
The above code will print 1st index of variable 'a'.
${OutputCode(`
e
H`)}
${Note('Index starts from zero.')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "String Length"; //title
window["msg"+k] = `
To get the length of a string, use the ${WordCode('len()')} function.
${FullCode(`
a = "Hello, World!"
print(len(a))
`)}
The ${WordCode('len()')} function returns the length of a string:
${OutputCode('13')}
${Note(`space are also counted in ${WordCode('len()')} function`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Slicing"; //title
window["msg"+k] = `
You can return a range of characters by using the slice syntax.
<br><br>
Specify the start index and the end index, separated by a colon, to return a part of the string.
${FullCode(`
b = "Hello, World!"
print(b[2:5])`)}
Get the characters from position 2 to position 5 (not included)
${OutputCode('llo')}
${Note('The first character has index 0.')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Slice From the Start"; //title
window["msg"+k] = `
By leaving out the start index, the range will start at the first character:
${FullCode(`
b = "Hello, World!"
print(b[:5])`)}
Get the characters from the start to position 5 (not included)
${OutputCode(`Hello`)}

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Slice To the End"; //title
window["msg"+k] = `
By leaving out the end index, the range will go to the end:
${FullCode(`
b = "Hello, World!"
print(b[2:])`)}
Get the characters from position 2, and all the way to the end
${OutputCode(`llo, World!`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Negative Indexing"; //title
window["msg"+k] = `
Use negative indexes to start the slice from the end of the string:
${FullCode(`
b = "Hello, World!"
print(b[-5:-2])`)}
Get the characters:
<br><br>
From: "o" in "World!" (position -5)
<br><br>
To, but not included: "d" in "World!" (position -2)
${OutputCode(`orl`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Modify Strings"; //title
window["msg"+k] = `
<h3>Upper Case</h3>
The ${WordCode('upper()')} method returns the string in upper case:
${FullCode(`
a = "Hello, World!"
print(a.upper()`)}
${OutputCode(`
HELLO, WORLD!`)}
<h3>Lower Case</h3>
The ${WordCode('lower()')} method returns the string in lower case:
${FullCode(`
a = "Hello, World!"
print(a.lower())`)}
${OutputCode('hello, world!')}
<h3>Remove Whitespace</h3>
Whitespace is the space before and/or after the actual text, and very often you want to remove this space.
${FullCode(`
a = " Hello, World! "
#Notice the space at beginning and end of the string
print(a.strip())`)}
${OutputCode(`Hello, World!`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "String Format"; //title
window["msg"+k] = `
We can combine strings and numbers by using the ${WordCode('format()')} method
<br><br>
The ${WordCode('format()')} method takes the passed arguments, formats them, and places them in the string where the placeholders ${WordCode('{}')} are:
${FullCode(`
age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))`)}
${OutputCode(`My name is John, and I am 36`)}
The format() method takes unlimited number of arguments, and are placed into the respective placeholders:
${FullCode(`
quantity = 3
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))`)}
${OutputCode(`I want 3 pieces of item 567 for 49.95 dollars.`)}
You can use index numbers ${WordCode('{0}')} to be sure the arguments are placed in the correct placeholders:
${FullCode(`
quantity = 3
itemno = 567
price = 49.95
myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
print(myorder.format(quantity, itemno, price))`)}
${OutputCode(`I want to pay 49.95 dollars for 3 pieces of item 567`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Escape Character"; //title
window["msg"+k] = `
To insert characters that are illegal in a string, use an escape character.
<br><br>
An escape character is a backslash \ followed by the character you want to insert.
<br><br>
An example of an illegal character is a double quote inside a string that is surrounded by double quotes:
<br>
${FullCode(`txt = "You "are" awesome."`)}
${OutputCode(`SyntaxError: invalid syntax`, true)}
To fix this problem, use the escape character \":
${FullCode(`txt = "You \\"are"\\ awesome."`)}
${OutputCode(`You "are" awesome.`)}
`; //message

totalLevel = k;