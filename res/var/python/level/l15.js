//function
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Python Functions"; //title
window["msg"+k] = `
A function is a block of code which only runs when it is called.
<br><br>
You can pass data, known as parameters, into a function.
<br><br>
A function can return data as a result.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Creating a Function"; //title
window["msg"+k] = `
In Python a function is defined using the ${WordCode('def')} keyword:
${FullCode(`
def my_function():
  print("Hello from a function")`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Calling a Function"; //title
window["msg"+k] = `
To call a function, use the function name followed by parenthesis:
${FullCode(`
def my_function():
  print("Hello from a function")

my_function()`)}
${OutputCode('Hello from a function')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Arguments"; //title
window["msg"+k] = `
Information can be passed into functions as arguments.
<br><br>
Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.
<br><br>
The following example has a function with one argument (fname). When the function is called, we pass along a first name, which is used inside the function to print the full name:
${FullCode(`
def my_function(fname):
  print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")
my_function("Linus")`)}
${OutputCode(`
Emil Refsnes
Tobias Refsnes
Linus Refsnes`)}
${Note('Arguments are often shortened to args in Python documentations.')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Parameters or Arguments?"; //title
window["msg"+k] = `
The terms parameter and argument can be used for the same thing: information that are passed into a function.
<br><br><br><br>
From a function's perspective:
<br><br>
A parameter is the variable listed inside the parentheses in the function definition.
<br><br>
An argument is the value that is sent to the function when it is called.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Number of Arguments"; //title
window["msg"+k] = `
By default, a function must be called with the correct number of arguments. 
Meaning that if your function expects 2 arguments, you have to call the function with 2 arguments, not more, and not less.
${FullCode(`
def my_function(fname, lname):
  print(fname + " " + lname)

my_function("Emil", "Refsnes")`, 'This function expects 2 arguments, and gets 2 arguments:')}
${OutputCode('Emil Refsnes')}
If you try to call the function with 1 or 3 arguments, you will get an error:
${FullCode(`
def my_function(fname, lname):
  print(fname + " " + lname)

my_function("Emil")`, 'This function expects 2 arguments, but gets only 1:')}
${OutputCode("TypeError: my_function() missing 1 required positional argument: 'lname'", true)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Arbitrary Arguments, *args"; //title
window["msg"+k] = `
If you do not know how many arguments that will be passed into your function, add a ${WordCode('*')} before the parameter name in the function definition.
<br><br>
This way the function will receive a tuple of arguments, and can access the items accordingly:
${FullCode(`
def my_function(*kids):
  print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus")`, 'If the number of arguments is unknown, add a * before the parameter name:')}
${OutputCode('The youngest child is Linus')}
${Note('Arbitrary Arguments are often shortened to *args in Python documentations.')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Keyword Arguments"; //title
window["msg"+k] = `
You can also send arguments with the key = value syntax.
<br><br>
This way the order of the arguments does not matter.
${FullCode(`
def my_function(child3, child2, child1):
  print("The youngest child is " + child3)

my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")`)}
${OutputCode('The youngest child is Linus')}
${Note('The phrase Keyword Arguments are often shortened to kwargs in Python documentations.')}

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Arbitrary Keyword Arguments, **kwargs"; //title
window["msg"+k] = `
If you do not know how many keyword arguments that will be passed into your function, add two asterisk: ** before the parameter name in the function definition.
<br><br>
This way the function will receive a dictionary of arguments, and can access the items accordingly:
${FullCode(`
def my_function(**kid):
  print("His last name is " + kid["lname"])

my_function(fname = "Tobias", lname = "Refsnes")`, 'If the number of keyword arguments is unknown, add a double ** before the parameter name:')}
${OutputCode('His last name is Refsnes')}
${Note('Arbitrary Kword Arguments are often shortened to **kwargs in Python documentations.')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Default Parameter Value"; //title
window["msg"+k] = `
The following example shows how to use a default parameter value.
<br><br>
If we call the function without argument, it uses the default value:
${FullCode(`
def my_function(country = "Norway"):
  print("I am from " + country)

my_function("Sweden")
my_function("India")
my_function()
my_function("Brazil")`)}
${OutputCode(`
I am from Sweden
I am from India
I am from Norway
I am from Brazil`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Passing a List as an Argument"; //title
window["msg"+k] = `
You can send any data types of argument to a function (string, number, list, dictionary etc.), and it will be treated as the same data type inside the function.
<br><br>
E.g. if you send a List as an argument, it will still be a List when it reaches the function:
${FullCode(`
def my_function(food):
  for x in food:
    print(x)

fruits = ["apple", "banana", "cherry"]

my_function(fruits)`, '')}
${OutputCode(`
apple
banana
cherry`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Return Values"; //title
window["msg"+k] = `
To let a function return a value, use the ${WordCode('return')} statement:
${FullCode(`
def my_function(x):
  return 5 * x

print(my_function(3))
print(my_function(5))
print(my_function(9))`)}
${OutputCode(`
15
25
45`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "The pass Statement"; //title
window["msg"+k] = `
${WordCode('function')} definitions cannot be empty, but if you for some reason have a ${WordCode('function')} definition with no content, 
put in the ${WordCode('pass')} statement to avoid getting an error.
${FullCode(`
def myfunction():
  pass`)}

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Recursion"; //title
window["msg"+k] = `
Python also accepts function recursion, which means a defined function can call itself.
<br><br>
Recursion is a common mathematical and programming concept. It means that a function calls itself. This has the benefit of meaning that you can loop through data to reach a result.
<br><br>
The developer should be very careful with recursion as it can be quite easy to slip into writing a function which never terminates, or one that uses excess amounts of memory or processor power. However, when written correctly recursion can be a very efficient and mathematically-elegant approach to programming.
<br><br>
In this example, ${WordCode('tri_recursion()')} is a function that we have defined to call itself ("recurse"). We use the ${WordCode('k')} variable as the data, which decrements (${WordCode('-1')}) every time we recurse. The recursion ends when the condition is not greater than 0 (i.e. when it is 0).
<br><br>
To a new developer it can take some time to work out how exactly this works, best way to find out is by testing and modifying it.
${FullCode(`
def tri_recursion(k):
  if(k > 0):
    result = k + tri_recursion(k - 1)
    print(result)
  else:
    result = 0
  return result

print("Recursion Example Results")
tri_recursion(6)`)}
${OutputCode(`
Recursion Example Results
1
3
6
10
15
21`)}
`; //message

totalLevel = k;