//booleans
k=0;

k++;
window["type"+k] = "message";
window["ti"+k] = "Booleans"; //title
window["msg"+k] = `
Booleans represent one of two values: ${WordCode(`True`)} or ${WordCode(`False`)}.
${FullCode(`
x = True
y = False
print(type(x))
print(type(y))`)}
${OutputCode(`
&lt;class 'bool'&gt;
&lt;class 'bool'&gt;`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Most Values are True"; //title
window["msg"+k] = `
Almost any value is evaluated to ${WordCode('True')} if it has some sort of content.
<br><br>
Any string is ${WordCode('True')}, except empty strings.
<br><br>
Any number is ${WordCode('True')}, except ${WordCode('0')}.
<br><br>
Any list, tuple, set, and dictionary are ${WordCode('True')}, except empty ones.
${FullCode(`
print(bool("abc"))
print(bool(123))
print(bool(["apple", "cherry", "banana"]))`)}
${OutputCode(`
True
True
True`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Some Values are False"; //title
window["msg"+k] = `
In fact, there are not many values that evaluate to ${WordCode('False')}, except empty values, such as ${WordCode('()')}, ${WordCode('[]')}, ${WordCode('{}')}, ${WordCode('""')}, the number ${WordCode('0')}, and the value ${WordCode('None')}. 
And of course the value ${WordCode('False')} evaluates to ${WordCode('False')}.
${FullCode(`
print(bool(False))
print(bool(None))
print(bool(0))
print(bool(""))
print(bool(()))
print(bool([]))
print(bool({}))`)}
${OutputCode(`
False
False
False
False
False
False
False`)}
`; //message

totalLevel = k;