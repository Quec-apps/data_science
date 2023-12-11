//data types
k=0;

k++;
window["type"+k] = "message";
window["ti"+k] = "Python Data Types"; //title
window["msg"+k] = `
In programming, data type is an important concept.
<br><br>
Variables can store data of different types, and different types can do different things.
<br><br>
Python has the following data types built-in by default, in these categories:
<br><br>
Text Type:	${WordCode('str')}<br>
Numeric Types:	${WordCode('int')}, ${WordCode('float')}, ${WordCode('complex')}<br>
Sequence Types:	${WordCode('list')}, ${WordCode('tuple')}, ${WordCode('range')}<br>
Mapping Type:	${WordCode('dict')}<br>
Set Types:	${WordCode('set')}, ${WordCode('frozenset')}<br>
Boolean Type:	${WordCode('bool')}<br>
Binary Types:	${WordCode('bytes')}, ${WordCode('bytearray')}, ${WordCode('memoryview')}<br>
None Type:	${WordCode('NoneType')}<br>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Data Types with example"; //title
window["msg"+k] = `
${FullCode(`
x = "Hello World"	#str	
x = 20	#int	
x = 20.5	#float	
x = 1j	#complex	
x = ["apple", "banana", "cherry"]	#list	
x = ("apple", "banana", "cherry")	#tuple	
x = range(6)	#range	
x = {"name" : "John", "age" : 36}	#dict	
x = {"apple", "banana", "cherry"}	#set	
x = frozenset({"apple", "banana", "cherry"})  #frozenset	
x = True	#bool	
x = b"Hello"	#bytes	
x = bytearray(5)	#bytearray	
x = memoryview(bytes(5))	#memoryview	
x = None	#NoneType
`)}
${Note(`You will learn more about each data types in upcoming chapters.`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Most used Data types"; //title
window["msg"+k] = `
${WordCode('str')},${WordCode('int')},${WordCode('float')},${WordCode('list')},${WordCode('dict')} and ${WordCode('bool')}
are the most used data types in Python. So we will only focus on these data types in this tutorial.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Getting the Data Type"; //title
window["msg"+k] = `
You can get the data type of any object by using the ${WordCode('type()')} function:
${FullCode(`
x = 5
print(type(x))
`)}
${OutputCode(`&lt;class 'int'&gt;`)}
`; //message

totalLevel = k;