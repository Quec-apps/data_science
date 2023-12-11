//Tuple
k=0;

k++;
window["type"+k] = "message";
window["ti"+k] = "Tuple"; //title
window["msg"+k] = `
Tuples are used to store multiple items in a single variable.
<br><br>
Tuple is one of 4 built-in data types in Python used to store collections of data, the other 3 are List, Set, and Dictionary, all with different qualities and usage.
<br><br>
A tuple is a collection which is ordered and unchangeable.
<br><br>
Tuples are written with round brackets.
${FullCode(`
thistuple = ("apple", "banana", "cherry")
print(thistuple)`, 'Create a Tuple:')}
${OutputCode("('apple', 'banana', 'cherry')")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Tuple Items"; //title
window["msg"+k] = `
Tuple items are ordered, unchangeable, and allow duplicate values.
<br><br>
Tuple items are indexed, the first item has index ${WordCode('[0]')}, the second item has index ${WordCode('[1]')} etc.
<h3>Ordered</h3>
When we say that tuples are ordered, it means that the items have a defined order, and that order will not change.
<h3>Unchangeable</h3>
Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.
<h3>Allow Duplicates</h3>
Since tuples are indexed, they can have items with the same value:
${FullCode(`
thistuple = ("apple", "banana", "cherry", "apple", "cherry")
print(thistuple)`, 'Tuples allow duplicate values:')}
${OutputCode("('apple', 'banana', 'cherry', 'apple', 'cherry')")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Tuple Length"; //title
window["msg"+k] = `
To determine how many items a tuple has, use the ${WordCode('len()')} function:
${FullCode(`
thistuple = ("apple", "banana", "cherry")
print(len(thistuple))`, 'Print the number of items in the tuple:')}
${OutputCode('3')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Create Tuple With One Item"; //title
window["msg"+k] = `
To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.
${FullCode(`
thistuple = ("apple",)
print(type(thistuple))

#NOT a tuple
thistuple = ("apple")
print(type(thistuple))`, 'One item tuple, remember the comma:')}
${OutputCode(`
&lt;class 'tuple'&gt;
&lt;class 'str'&gt;`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Tuple Items - Data Types"; //title
window["msg"+k] = `
Tuple items can be of any data type:
${FullCode(`
tuple1 = ("apple", "banana", "cherry")
tuple2 = (1, 5, 7, 9, 3)
tuple3 = (True, False, False)`, 'String, int and boolean data types:')}
A tuple can contain different data types:
${FullCode(`
tuple1 = ("abc", 34, True, 40, "male")`, 'A tuple with strings, integers and boolean values:')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Access Tuple Items"; //title
window["msg"+k] = `
You can access tuple items by referring to the index number, inside square brackets:
${FullCode(`
thistuple = ("apple", "banana", "cherry")
print(thistuple[1])`, 'Print the second item in the tuple:')}
${OutputCode("banana")}
${Note('The first item has index 0.')}
<h3>Negative Indexing</h3>
Negative indexing means start from the end.
<br><br>
${WordCode('-1')} refers to the last item, ${WordCode('-2')} refers to the second last item etc.
<h3>Range of Indexes</h3>
You can specify a range of indexes by specifying where to start and where to end the range.
<br><br>
When specifying a range, the return value will be a new tuple with the specified items.
${FullCode(`
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[2:5])`, 'Return the third, fourth, and fifth item:')}
${OutputCode("('cherry', 'orange', 'kiwi')")}
${Note('The search will start at index 2 (included) and end at index 5 (not included).')}
${Note('Remember that the first item has index 0.')}
By leaving out the start value, the range will start at the first item:
${FullCode(`
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[:4])`, 'This example returns the items from the beginning to, but NOT included, "kiwi":')}
${OutputCode("('apple', 'banana', 'cherry', 'orange')")}
By leaving out the end value, the range will go on to the end of the list:
${FullCode(`
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[2:])`, 'This example returns the items from "cherry" and to the end:')}
${OutputCode("('cherry', 'orange', 'kiwi', 'melon', 'mango')")}
<h3>Range of Negative Indexes</h3>
Specify negative indexes if you want to start the search from the end of the tuple:
${FullCode(`
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[-4:-1])`, 'This example returns the items from index -4 (included) to index -1 (excluded)')}
${OutputCode("('orange', 'kiwi', 'melon')")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Update Tuples"; //title
window["msg"+k] = `
Tuples are unchangeable, meaning that you cannot change, add, or remove items once the tuple is created.
<br><br>
But there are some workarounds.
<h3>Change Tuple Values</h3>
Once a tuple is created, you cannot change its values. Tuples are <b>unchangeable</b>, or <b>immutable</b> as it also is called.
<br><br>
But there is a workaround. You can convert the tuple into a list, change the list, and convert the list back into a tuple.
${FullCode(`
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)

print(x)`, 'Convert the tuple into a list to be able to change it:')}
${OutputCode('("apple", "kiwi", "cherry")')}

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Add Items"; //title
window["msg"+k] = `
Since tuples are immutable, they do not have a built-in ${WordCode('append()')} method, but there are other ways to add items to a tuple.
<br><br>
1. <b>Convert into a list:</b> Just like the workaround for changing a tuple, you can convert it into a list, add your item(s), and convert it back into a tuple.
${FullCode(`
thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.append("orange")
thistuple = tuple(y)`, "('apple', 'banana', 'cherry', 'orange')")}
2. <b>Add tuple to a tuple</b>. You are allowed to add tuples to tuples, so if you want to add one item, (or many), create a new tuple with the item(s), and add it to the existing tuple:
${FullCode(`
thistuple = ("apple", "banana", "cherry")
y = ("orange",)
thistuple += y

print(thistuple)`, 'Create a new tuple with the value "orange", and add that tuple:')}
${OutputCode("('apple', 'banana', 'cherry', 'orange')")}
${Note('When creating a tuple with only one item, remember to include a comma after the item, otherwise it will not be identified as a tuple.')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Remove Items"; //title
window["msg"+k] = `
${Note('You cannot remove items in a tuple.')}
Tuples are <b>unchangeable</b>, so you cannot remove items from it, but you can use the same workaround as we used for changing and adding tuple items:
${FullCode(`
thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.remove("apple")
thistuple = tuple(y)`, 'Convert the tuple into a list, remove "apple", and convert it back into a tuple:')}
${OutputCode("('banana', 'cherry')")}
Or you can delete the tuple completely:
${FullCode(`
thistuple = ("apple", "banana", "cherry")
del thistuple
print(thistuple) #this will raise an error because the tuple no longer exists`)}
${OutputCode("NameError: name 'thistuple' is not defined", true)}
`; //message
console.log(k)
k++;
window["type"+k] = "message";
window["ti"+k] = "Unpack Tuples"; //title
window["msg"+k] = `
<h3>Unpacking a Tuple</h3>
When we create a tuple, we normally assign values to it. This is called "packing" a tuple:
${FullCode(`fruits = ("apple", "banana", "cherry")`,'Packing a tuple:')}
${OutputCode("('apple', 'banana', 'cherry')")}
But, in Python, we are also allowed to extract the values back into variables. This is called "unpacking":
${FullCode(`
fruits = ("apple", "banana", "cherry")

(green, yellow, red) = fruits

print(green)
print(yellow)
print(red)`, 'Unpacking a tuple:')}
${OutputCode(`
apple
banana
cherry`)}
${Note('The number of variables must match the number of values in the tuple, if not, you must use an asterisk to collect the remaining values as a list.')}
<h3>Using Asterisk ${WordCode('*')}</h3>
If the number of variables is less than the number of values, you can add an ${WordCode('*')} to the variable name and the values will be assigned to the variable as a list:
${FullCode(`
fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")

(green, yellow, *red) = fruits

print(green)
print(yellow)
print(red)`, 'Assign the rest of the values as a list called "red":')}
${OutputCode(`
apple
banana
['cherry', 'strawberry', 'raspberry']`)}
If the asterisk is added to another variable name than the last, Python will assign values to the variable until the number of values left matches the number of variables left.
${FullCode(`
fruits = ("apple", "mango", "papaya", "pineapple", "cherry")

(green, *tropic, red) = fruits

print(green)
print(tropic)
print(red)`, 'Add a list of values the "tropic" variable:')}
${OutputCode(`
apple
['mango', 'papaya', 'pineapple']
cherry`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Join Tuples"; //title
window["msg"+k] = `
<h3>Join Two Tuples</h3>
To join two or more tuples you can use the ${WordCode('+')} operator:
${FullCode(`
tuple1 = ("a", "b" , "c")
tuple2 = (1, 2, 3)

tuple3 = tuple1 + tuple2
print(tuple3)`, 'Join two tuples:')}
${OutputCode(`('a', 'b', 'c', 1, 2, 3)`)}
<h3>Multiply Tuples</h3>
If you want to multiply the content of a tuple a given number of times, you can use the ${WordCode('*')} operator:
${FullCode(`
fruits = ("apple", "banana", "cherry")
mytuple = fruits * 2

print(mytuple)`, 'Multiply the fruits tuple by 2:')}
${OutputCode("('apple', 'banana', 'cherry', 'apple', 'banana', 'cherry')")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Tuple Methods"; //title
window["msg"+k] = `
Python has two built-in methods that you can use on tuples.
<br><br><hr>
${WordCode('count()')}: Returns the number of times a specified value occurs in a tuple
<hr>
${WordCode('index()')}: Searches the tuple for a specified value and returns the position of where it was found
<hr>
`; //message

totalLevel = k;