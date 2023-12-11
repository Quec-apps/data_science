// lambda
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Lambda"; //title
window["msg"+k] = `
A lambda function is a small anonymous function.
<br><br>
A lambda function can take any number of arguments, but can only have one expression.
<h4>Syntax</h4>
<i>lambda arguments : expression</i>
${FullCode(`
x = lambda a: a + 10
print(x(5))`, `Add 10 to argument ${WordCode('a')}, and return the result:`)}
${OutputCode('15')}
Lambda functions can take any number of arguments:
${FullCode(`
x = lambda a, b: a * b
print(x(5, 6))`, `Multiply argument ${WordCode('a')} with argument ${WordCode('b')} and return the result:`)}
${OutputCode('30')}
${FullCode(`
x = lambda a, b, c: a + b + c
print(x(5, 6, 2))`, `Summarize argument ${WordCode('a')}, ${WordCode('b')}, and ${WordCode('c')} and return the result:`)}
${OutputCode('13')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Why Use Lambda Functions?"; //title
window["msg"+k] = `
The power of lambda is better shown when you use them as an anonymous function inside another function.
<br><br>
Say you have a function definition that takes one argument, and that argument will be multiplied with an unknown number:
${FullCode(`
def myfunc(n):
  return lambda a : a * n`)}
Use that function definition to make a function that always doubles the number you send in:
${FullCode(`
def myfunc(n):
  return lambda a : a * n
mydoubler = myfunc(2)
print(mydoubler(11))
`)}
${OutputCode('22')}
Or, use the same function definition to make a function that always triples the number you send in:
${FullCode(`
def myfunc(n):
  return lambda a : a * n
mytripler = myfunc(3)
print(mytripler(11))`)}
${OutputCode('33')}
Or, use the same function definition to make both functions, in the same program:
${FullCode(`
def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)
mytripler = myfunc(3)

print(mydoubler(11)) 
print(mytripler(11))`)}
${OutputCode(`
22
33`)}
${Note('Use lambda functions when an anonymous function is required for a short period of time.')}
`; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

// k++;
// window["type"+k] = "message";
// window["ti"+k] = ""; //title
// window["msg"+k] = `

// `; //message

totalLevel = k;