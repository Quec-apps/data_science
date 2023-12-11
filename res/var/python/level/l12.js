//if else
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Python If ... Else"; //title
window["msg"+k] = `
Python supports the usual logical conditions from mathematics:<br><br>
 - Equals: ${WordCode('a == b')}<br><br>
 - Not Equals: ${WordCode('a != b')}<br><br>
 - Less than: ${WordCode('a < b')}<br><br>
 - Less than or equal to: ${WordCode('a <= b')}<br><br>
 - Greater than: ${WordCode('a > b')}<br><br>
 - Greater than or equal to: ${WordCode('a >= b')}<br><br>
 These conditions can be used in several ways, most commonly in "if statements" and loops.
<br><br>
An "if statement" is written by using the ${WordCode('if')} keyword.
${FullCode(`
a = 33
b = 200

if b > a:
  print("b is greater than a")`)}
${OutputCode("b is greater than a")}
In this example we use two variables, ${WordCode('a')} and ${WordCode('b')}, which are used as part of the if statement to test whether ${WordCode('b')} is greater than ${WordCode('a')}.
As ${WordCode('a')} is ${WordCode('33')}, and ${WordCode('b')} is ${WordCode('200')}, we know that 200 is greater than 33, and so we print to screen that "b is greater than a".
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Indentation"; //title
window["msg"+k] = `
Python relies on indentation (whitespace at the beginning of a line) to define scope in the code. Other programming languages often use curly-brackets for this purpose.
${FullCode(`
a = 33
b = 200

if b > a:
print("b is greater than a")`, 'If statement, without indentation (will raise an error):')}
${OutputCode(`
print("b is greater than a")
^
IndentationError: expected an indented block`,true)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Elif"; //title
window["msg"+k] = `
The ${WordCode('elif')} keyword is Python's way of saying "if the previous conditions were not true, then try this condition".
${FullCode(`
a = 33
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")`)}
${OutputCode('a and b are equal')}
In this example ${WordCode('a')} is equal to ${WordCode('b')}, so the first condition is not true, but the ${WordCode('elif')} condition is true, so we print to screen that "a and b are equal".


`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Else"; //title
window["msg"+k] = `
The ${WordCode('else')} keyword catches anything which isn't caught by the preceding conditions.
${FullCode(`
a = 200
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")`)}
${OutputCode('a is greater than b')}
In this example ${WordCode('a')} is greater than ${WordCode('b')}, so the first condition is not true, also the ${WordCode('elif')} condition is not true,
so we go to the ${WordCode('else')} condition and print to screen that "a is greater than b".
<br><br>
You can also have an ${WordCode('else')} without the ${WordCode('elif')}:
${FullCode(`
a = 200
b = 33
if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")`)}
${OutputCode('b is not greater than a')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Short Hand If"; //title
window["msg"+k] = `
If you have only one statement to execute, you can put it on the same line as the ${WordCode('if')} statement.
${FullCode(`
a = 200
b = 33

if a > b: print("a is greater than b")`)}
${OutputCode('a is greater than b')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Short Hand If ... Else"; //title
window["msg"+k] = `
If you have only one statement to execute, one for ${WordCode('if')}, and one for ${WordCode('else')}, you can put it all on the same line:
${FullCode(`
a = 2
b = 330

print("A") if a > b else print("B")`)}
${OutputCode('B')}
${Note('This technique is known as Ternary Operators, or Conditional Expressions.')}
You can also have multiple ${WordCode('else')} statements on the same line:
${FullCode(`
a = 330
b = 330

print("A") if a > b else print("=") if a == b else print("B")`,'One line if else statement, with 3 conditions:')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "And"; //title
window["msg"+k] = `
The ${WordCode('and')} keyword is a logical operator, and is used to combine conditional statements:
${FullCode(`
a = 200
b = 33
c = 500
if a > b and c > a:
  print("Both conditions are True")`, 'Test if a is greater than b, AND if c is greater than a:')}
${OutputCode('Both conditions are True')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Or"; //title
window["msg"+k] = `
The ${WordCode('or')} keyword is a logical operator, and is used to combine conditional statements:
${FullCode(`
a = 200
b = 33
c = 500
if a > b or a > c:
  print("At least one of the conditions is True")`, `Test if ${WordCode('a')} is greater than ${WordCode('b')}, OR if ${WordCode('a')} is greater than ${WordCode('c')}:`)}
${OutputCode('At least one of the conditions is True')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Not"; //title
window["msg"+k] = `
The ${WordCode('not')} keyword is a logical operator, and is used to reverse the result of the conditional statement:
${FullCode(`
a = 33
b = 200
if not a > b:
  print("a is NOT greater than b")`, `Test if ${WordCode('a')} is NOT greater than ${WordCode('b')}:`)}
${OutputCode('a is NOT greater than b')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Nested If"; //title
window["msg"+k] = `
You can have ${WordCode('if')} statements inside ${WordCode('if')} statements, this is called nested ${WordCode('if')} statements.
${FullCode(`
x = 41

if x > 10:
  print("Above ten,")
  if x > 20:
    print("and also above 20!")
  else:
    print("but not above 20.")`)}
${OutputCode(`
Above ten,
and also above 20!`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "The pass Statement"; //title
window["msg"+k] = `
${WordCode('if')} statements cannot be empty, but if you for some reason have an ${WordCode('if')} statement with no content, put in the ${WordCode('pass')} statement to avoid getting an error.
${FullCode(`
a = 33
b = 200

if b > a:
  pass`)}
`; //message


totalLevel = k;