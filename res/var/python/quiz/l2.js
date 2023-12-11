k=0;

k++;
window["type"+k] = "word";
window["q"+k] = `Python is a popular programming language`;
window["o1"+k] = "True";
window["o2"+k] = "False";
// window["o3"+k] = "car";
// window["o4"+k] = "tea";
window["ans"+k] = 1;

k++;
window["type"+k] = "word";
window["q"+k] = "Python is a Object Oriented Language";
window["o1"+k] = "True";
window["o2"+k] = "False";
window["ans"+k] = 1;

k++;
window["type"+k] = "word";
window["q"+k] = `
${FullCode(`print='hello'`)}
Is this correct way of printing a message to console?`;
window["o1"+k] = "Yes";
window["o2"+k] = "No";
window["ans"+k] = 2;

k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
<h3>What is the correct syntax to print a message to the console?</h3>
${Typing('print')}('Hello ${Typing('world')}')
`; //message

totalLevel = k;