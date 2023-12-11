//while loop
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Python Loops"; //title
window["msg"+k] = `
Python has two primitive loop commands:
<br><br>
 - ${WordCode('while')} loops<br><br>
 - ${WordCode('for')} loops
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "The while Loop"; //title
window["msg"+k] = `
With the ${WordCode('while')} loop we can execute a set of statements as long as a condition is true.
${FullCode(`
i = 1
while i < 6:
  print(i)
  i += 1`, 'Print i as long as i is less than 6:')}
${OutputCode(`
1
2
3
4
5`)}
${Note('remember to increment i, or else the loop will continue forever.')}
The ${WordCode('while')} loop requires relevant variables to be ready, in this example we need to define an indexing variable, ${WordCode('i')}, which we set to 1.

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "The break Statement"; //title
window["msg"+k] = `
With the ${WordCode('break')} statement we can stop the loop even if the while condition is true:
${FullCode(`
i = 1
while i < 6:
  print(i)
  if (i == 3):
    break
  i += 1`, 'Exit the loop when i is 3:')}
${OutputCode(`
1
2
3`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "The continue Statement"; //title
window["msg"+k] = `
With the ${WordCode('continue')} statement we can stop the current iteration, and continue with the next:
${FullCode(`
i = 0
while i < 6:
  i += 1
  if i == 3:
    continue
  print(i)`, 'Continue to the next iteration if i is 3:')}
${OutputCode(`
1
2
4
5
6`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "The else Statement"; //title
window["msg"+k] = `
With the ${WordCode('else')} statement we can run a block of code once when the condition no longer is true:
${FullCode(`
i = 1
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")`, 'Print a message once the condition is false:')}
${OutputCode(`
1
2
3
4
5
i is no longer less than 6`)}
`; //message

totalLevel = k;