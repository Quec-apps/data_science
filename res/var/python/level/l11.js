//Operators
k=0;

k++;
window["type"+k] = "message";
window["ti"+k] = "Python Operators"; //title
window["msg"+k] = `
Operators are used to perform operations on variables and values.
<br><br>
In the example below, we use the ${WordCode('+')} operator to add together two values:
${FullCode("print(10 + 5)")}
${OutputCode('15')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Basic Operator"; //title
window["msg"+k] = `
Lets understand about some common operators
<h3>Addition</h3>
${FullCode(`
x = 5
y = 3
print(x + y)`)}
${OutputCode('8')}
<h3>Subtraction</h3>
${FullCode(`
x = 5
y = 3
print(x - y)`)}
${OutputCode('2')}
<h3>Multiplication</h3>
${FullCode(`
x = 5
y = 3
print(x * y)`)}
${OutputCode('15')}
<h3>Division</h3>
${FullCode(`
x = 12
y = 3
print(x / y)`)}
${OutputCode('4')}
<h3>Modulus</h3>
${FullCode(`
x = 5
y = 2
print(x % y)`)}
${OutputCode("1")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "All operators"; //title
window["msg"+k] = `
Python divides the operators in the following groups:<br><br>
 - Arithmetic operators<br><br>
 - Assignment operators<br><br>
 - Comparison operators<br><br>
 - Logical operators<br><br>
 - Identity operators<br><br>
 - Membership operators<br><br>
 - Bitwise operators<br><br>

<h3>Python Arithmetic Operators</h3>
<table class="ws-table-all">
<tbody><tr>
<th style="width:25%">Operator</th>
<th style="width:35%">Name</th>
<th style="width:30%">Example</th>
</tr>
<tr>
<td>+</td>
<td>Addition</td>
<td>x + y</td>
</tr>
<tr>
<td>-</td>
<td>Subtraction</td>
<td>x - y</td>
</tr>
<tr>
<td>*</td>
<td>Multiplication</td>
<td>x * y</td>
</tr>
<tr>
<td>/</td>
<td>Division</td>
<td>x / y</td>
</tr>
<tr>
<td>%</td>
<td>Modulus</td>
<td>x % y</td>
</tr>
  <tr>
<td>**</td>
<td>Exponentiation</td>
<td>x ** y</td>
  </tr>
<tr>
<td>//</td>
<td>Floor division</td>
<td>x // y</td>
</tr>
</tbody></table>

<h3>Python Assignment Operators</h3>
Assignment operators are used to assign values to variables:
<table class="ws-table-all">
<tbody><tr>
<th style="width:25%">Operator</th>
<th style="width:20%">Example</th>
<th style="width:20%">Same As</th>
</tr>
<tr>
<td>=</td>
<td>x = 5</td>
<td>x = 5</td>
</tr>
  <tr>
<td>+=</td>
<td>x += 3</td>
<td>x = x + 3</td>
  </tr>
  <tr>
<td>-=</td>
<td>x -= 3</td>
<td>x = x - 3</td>
  </tr>
  <tr>
<td>*=</td>
<td>x *= 3</td>
<td>x = x * 3</td>
  </tr>
  <tr>
<td>/=</td>
<td>x /= 3</td>
<td>x = x / 3</td>
  </tr>
  <tr>
<td>%=</td>
<td>x %= 3</td>
<td>x = x % 3</td>
  </tr>
  <tr>
<td>//=</td>
<td>x //= 3</td>
<td>x = x // 3</td>
  </tr>
  <tr>
<td>**=</td>
<td>x **= 3</td>
<td>x = x ** 3</td>
  </tr>
  <tr>
<td>&amp;=</td>
<td>x &amp;= 3</td>
<td>x = x &amp; 3</td>
  </tr>
  <tr>
<td>|=</td>
<td>x |= 3</td>
<td>x = x | 3</td>
  </tr>
<tr>
<td>^=</td>
<td>x ^= 3</td>
<td>x = x ^ 3</td>
</tr>
<tr>
<td>&gt;&gt;=</td>
<td>x &gt;&gt;= 3</td>
<td>x = x &gt;&gt; 3</td>
</tr>
<tr>
<td>&lt;&lt;=</td>
<td>x &lt;&lt;= 3</td>
<td>x = x &lt;&lt; 3</td>
</tr>
</tbody></table>
<h3>Python Comparison Operators</h3>
Comparison operators are used to compare two values:
<table class="ws-table-all notranslate">
<tbody><tr>
<th style="width:25%">Operator</th>
<th style="width:35%">Name</th>
<th style="width:30%">Example</th>
</tr>
<tr>
<td>==</td>
<td>Equal</td>
<td>x == y</td>
</tr>
<tr>
<td>!=</td>
<td>Not equal</td>
<td>x != y</td>
</tr>
<tr>
<td>&gt;</td>
<td>Greater than</td>
<td>x &gt; y</td>
</tr>
<tr>
<td>&lt;</td>
<td>Less than</td>
<td>x &lt; y</td>
</tr>
  <tr>
<td>&gt;=</td>
<td>Greater than or equal to</td>
<td>x &gt;= y</td>
  </tr>
<tr>
<td>&lt;=</td>
<td>Less than or equal to</td>
<td>x &lt;= y</td>
</tr>
</tbody></table>
<h3>Python Logical Operators</h3>
Logical operators are used to combine conditional statements:
<table class="ws-table-all notranslate">
<tbody><tr>
<th style="width:25%">Operator</th>
<th style="width:35%">Description</th>
<th style="width:30%">Example</th>
</tr>
<tr>
<td>and&nbsp;</td>
<td>Returns True if both statements are true</td>
<td>x &lt; 5 and&nbsp; x &lt; 10</td>
</tr>
<tr>
<td>or</td>
<td>Returns True if one of the statements is true</td>
<td>x &lt; 5 or x &lt; 4</td>
</tr>
<tr>
<td>not</td>
<td>Reverse the result, returns False if the result is true</td>
<td>not(x &lt; 5 and x &lt; 10)</td>
</tr>
</tbody></table>
<h3>Python Identity Operators</h3>
Identity operators are used to compare the objects, not if they are equal, but if they are actually the same object, with the same memory location:
<table class="ws-table-all notranslate">
<tbody><tr>
<th style="width:25%">Operator</th>
<th style="width:35%">Description</th>
<th style="width:30%">Example</th>
</tr>
<tr>
<td>is&nbsp;</td>
<td>Returns True if both variables are the same object</td>
<td>x is y</td>
</tr>
<tr>
<td>is not</td>
<td>Returns True if both variables are not the same object</td>
<td>x is not y</td>
</tr>
</tbody></table>
<h3>Python Membership Operators</h3>
Membership operators are used to test if a sequence is presented in an object:
<table class="ws-table-all notranslate">
<tbody><tr>
<th style="width:25%">Operator</th>
<th style="width:35%">Description</th>
<th style="width:30%">Example</th>
</tr>
<tr>
<td>in&nbsp;</td>
<td>Returns True if a sequence with the specified value is present in the object</td>
<td>x in y</td>
</tr>
<tr>
<td>not in</td>
<td>Returns True if a sequence with the specified value is not present in the 
object</td>
<td>x not in y</td>
</tr>
</tbody></table>
<h3>Python Bitwise Operators</h3>
Bitwise operators are used to compare (binary) numbers:
<table class="ws-table-all notranslate">
<tbody><tr>
<th style="width:10%">Operator</th>
<th style="width:15%">Name</th>
<th style="width:35%">Description</th>
<th style="width:30%">Example</th>
</tr>
  <tr>
<td>&amp;&nbsp;</td>
<td>AND</td>
<td>Sets each bit to 1 if both bits are 1</td>
<td>x &amp; y</td>
  </tr>
  <tr>
<td>|</td>
<td>OR</td>
<td>Sets each bit to 1 if one of two bits is 1</td>
<td>x | y</td>
  </tr>
  <tr>
<td>^</td>
<td>XOR</td>
<td>Sets each bit to 1 if only one of two bits is 1</td>
<td>x ^ y</td>
  </tr>
<tr>
<td>~</td>
<td>NOT</td>
<td>Inverts all the bits</td>
<td>~x</td>
</tr>
<tr>
<td>&lt;&lt;</td>
<td>Zero fill left shift</td>
<td>Shift left by pushing zeros in from the right and let the leftmost bits fall 
off</td>
<td>x &lt;&lt; 2</td>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>Signed right shift</td>
<td>Shift right by pushing copies of the leftmost bit in from the left, and let 
the rightmost bits fall off</td>
<td>x &gt;&gt; 2</td>
</tr>
</tbody></table>
`; //message


totalLevel = k;