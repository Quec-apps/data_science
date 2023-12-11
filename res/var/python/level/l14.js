//for loop
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Python For Loops"; //title
window["msg"+k] = `
A ${WordCode('for')} loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).
<br><br>
This is less like the ${WordCode('for')} keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.
<br><br>
With the ${WordCode('for')} loop we can execute a set of statements, once for each item in a list, tuple, set etc.
${FullCode(`
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x) `, 'Print each fruit in a fruit list:')}
${OutputCode(`
apple
banana
cherry`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Looping Through a String"; //title
window["msg"+k] = `
Even strings are iterable objects, they contain a sequence of characters:
${FullCode(`
for x in "banana":
  print(x)`, 'Loop through the letters in the word "banana":')}
${OutputCode(`
b
a
n
a
n
a`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "The break Statement"; //title
window["msg"+k] = `
With the ${WordCode('break')} statement we can stop the loop before it has looped through all the items:
${FullCode(`
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x) 
  if x == "banana":
    break`, 'Exit the loop when x is "banana":')}
${OutputCode(`
apple
banana`)}
${FullCode(`
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    break
  print(x)`, 'Exit the loop when x is "banana", but this time the break comes before the print:')}
${OutputCode('apple')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "The continue Statement"; //title
window["msg"+k] = `
With the ${WordCode('continue')} statement we can stop the current iteration of the loop, and continue with the next:
${FullCode(`
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    continue
  print(x)`, 'Do not print banana:')}
${OutputCode(`
apple
cherry`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "The range() Function"; //title
window["msg"+k] = `
To loop through a set of code a specified number of times, we can use the ${WordCode('range()')} function,
<br><br>
The ${WordCode('range()')} function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.
${FullCode(`
for x in range(6):
  print(x) `, `Using the ${WordCode('range()')} function:`)}
${OutputCode(`
0
1
2
3
4
5`)}
${Note(`${WordCode('range(6)')} is not the values of 0 to 6, but the values 0 to 5.`)}
The ${WordCode('range()')} function defaults to 0 as a starting value, however it is possible to specify the starting value by adding a parameter: ${WordCode('range(2, 6)')},
which means values from 2 to 6 (but not including 6):
${FullCode(`
for x in range(2, 6):
  print(x)`, 'Using the start parameter:')}
${OutputCode(`
2
3
4
5`)}
The ${WordCode('range()')} function defaults to increment the sequence by 1,
however it is possible to specify the increment value by adding a third parameter: ${WordCode('range(2, 30, 3)')}:
${FullCode(`
for x in range(2, 30, 3):
  print(x)`, 'Increment the sequence with 3 (default is 1):')}
${OutputCode(`
2
5
8
11
14
17
20
23
26
29`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Else in For Loop"; //title
window["msg"+k] = `
The ${WordCode('else')} keyword in a ${WordCode('for')} loop specifies a block of code to be executed when the loop is finished:
${FullCode(`
for x in range(6):
  print(x)
else:
  print("Finally finished!")`, 'Print all numbers from 0 to 5, and print a message when the loop has ended:')}
${OutputCode(`
0
1
2
3
4
5
Finally finished!`)}
${Note(`The ${WordCode('else')} block will NOT be executed if the loop is stopped by a ${WordCode('break')} statement.`)}
${FullCode(`
for x in range(6):
  if x == 3: break
  print(x)
else:
  print("Finally finished!")
#If the loop breaks, the else block is not executed.`, 'Break the loop when x is 3, and see what happens with the else block:')}
${OutputCode(`
0
1
2`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Nested Loops"; //title
window["msg"+k] = `
A nested loop is a loop inside a loop.
<br><br>
The "inner loop" will be executed one time for each iteration of the "outer loop":
${FullCode(`
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)`, 'Print each adjective for every fruit:')}
${OutputCode(`
red apple
red banana
red cherry
big apple
big banana
big cherry
tasty apple
tasty banana
tasty cherry`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "The pass Statement"; //title
window["msg"+k] = `
${WordCode('for')} loops cannot be empty, but if you for some reason have a ${WordCode('for')} loop with no content, put in the ${WordCode('pass')} statement to avoid getting an error.
${FullCode(`
for x in [0, 1, 2]:
  pass`)}
`; //message


totalLevel = k;