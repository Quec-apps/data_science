//list
k=0;

k++;
window["type"+k] = "message";
window["ti"+k] = "Lists"; //title
window["msg"+k] = `
${FullCode(`mylist = ["apple", "banana", "cherry"]`)}
Lists are used to store multiple items in a single variable.
<br><br>
Lists are one of 4 built-in data types in Python used to store collections of data, the other 3 are Tuple, Set, and Dictionary, all with different qualities and usage.
<br><br>
Lists are created using square brackets:
${FullCode(`
thislist = ["apple", "banana", "cherry"]
print(thislist)`)}
${OutputCode(`['apple', 'banana', 'cherry']`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "List Items"; //title
window["msg"+k] = `
List items are ordered, changeable, and allow duplicate values.
<br><br>
List items are indexed, the first item has index ${WordCode('[0]')}, the second item has index ${WordCode('[1]')} etc.
<h3>Ordered</h3>
When we say that lists are ordered, it means that the items have a defined order, and that order will not change.
<br><br>
If you add new items to a list, the new items will be placed at the end of the list.
${Note('There are some list methods that will change the order, but in general: the order of the items will not change.')}
<h3>Changeable</h3>
The list is changeable, meaning that we can change, add, and remove items in a list after it has been created.
<h3>Allow Duplicates</h3>
Since lists are indexed, lists can have items with the same value:
${FullCode(`
thislist = ["apple", "banana", "cherry", "apple", "cherry"]
print(thislist)`)}
${OutputCode(`['apple', 'banana', 'cherry', 'apple', 'cherry']`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "List Length"; //title
window["msg"+k] = `
To determine how many items a list has, use the ${WordCode('len()')} function:
${FullCode(`
thislist = ["apple", "banana", "cherry"]
print(len(thislist))`)}
${OutputCode(`3`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "List Items - Data Types"; //title
window["msg"+k] = `
List items can be of any data type:
${FullCode(`
list1 = ["apple", "banana", "cherry"]
list2 = [1, 5, 7, 9, 3]
list3 = [True, False, False]`)}
<br>
A list can contain different data types:
${FullCode(`list1 = ["abc", 34, True, 40, "male"]`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Data type of list"; //title
window["msg"+k] = `
Do you remember how to find the data type of a variable?
<br><br>
Yes, you guessed it right. We can use ${WordCode('type()')} function to get the data type of a variable.
${FullCode(`
mylist = ["apple", "banana", "cherry"]
print(type(mylist))`)}
${OutputCode(`&lt;class 'list'&gt;`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Python Collections (Arrays)"; //title
window["msg"+k] = `
There are four collection data types in the Python programming language:<br><br>
 - <b>List</b> is a collection which is ordered and changeable. Allows duplicate members.<br><br>
 - <b>Tuple</b> is a collection which is ordered and unchangeable. Allows duplicate members.<br><br>
 - <b>Set</b> is a collection which is unordered, unchangeable, and unindexed. No duplicate members.<br><br>
 - <b>Dictionary</b> is a collection which is ordered and changeable. No duplicate members.<br><br>
${Note('You will learn more about Tuple, Set and Dictionary in upcoming chapters.')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Access Items"; //title
window["msg"+k] = `
List items are indexed and you can access them by referring to the index number:
${FullCode(`
thislist = ["apple", "banana", "cherry"]
print(thislist[1])`)}
Print the second item of the list
${OutputCode(`banana`)}
${Note('The first item has index 0.')}
<h3>Negative Indexing</h3>
Negative indexing means start from the end
<br><br>
${WordCode('-1')} refers to the last item, ${WordCode('-2')} refers to the second last item etc.
${FullCode(`
thislist = ["apple", "banana", "cherry"]
print(thislist[-1])`)}
${OutputCode(`cherry`)}
<br>
<h3>Range of Indexes</h3>
You can specify a range of indexes by specifying where to start and where to end the range.
<br><br>
When specifying a range, the return value will be a new list with the specified items.
${FullCode(`
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:5])`)}
Return the third, fourth, and fifth item:
${OutputCode(`['cherry', 'orange', 'kiwi']`)}
${Note('The search will start at index 2 (included) and end at index 5 (not included).')}
By leaving out the start value, the range will start at the first item:
${FullCode(`
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[:4])`)}
This example returns the items from the beginning to, but NOT including, "kiwi"
${OutputCode(`['apple', 'banana', 'cherry', 'orange']`)}
By leaving out the end value, the range will go on to the end of the list:
${FullCode(`
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:])`)}
This example returns the items from "cherry" to the end
${OutputCode(`['cherry', 'orange', 'kiwi', 'melon', 'mango']`)}
<h3>Range of Negative Indexes</h3>
Specify negative indexes if you want to start the search from the end of the list:
${FullCode(`
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[-4:-1])`)}
This example returns the items from "orange" (-4) to, but NOT including "mango" (-1)
${OutputCode(`['orange', 'kiwi', 'melon']`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Change Item Value"; //title
window["msg"+k] = `
To change the value of a specific item, refer to the index number:
${FullCode(`
thislist = ["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"
print(thislist)`)}
Change the second item
${OutputCode(`['apple', 'blackcurrant', 'cherry']`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Change List Items"; //title
window["msg"+k] = `
<h3>Change Item Value</h3>
To change the value of a specific item, refer to the index number:
${FullCode(`
thislist = ["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"
print(thislist)`)}
${OutputCode(`['apple', 'blackcurrant', 'cherry']`)}
<h3>Change a Range of Item Values</h3>
To change the value of items within a specific range, define a list with the new values, and refer to the range of index numbers where you want to insert the new values:
${FullCode(`thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist[1:3] = ["blackcurrant", "watermelon"]
print(thislist)`)}
Change the values "banana" and "cherry" with the values "blackcurrant" and "watermelon"
${OutputCode(`['apple', 'blackcurrant', 'watermelon', 'orange', 'kiwi', 'mango']`)}
If you insert more items than you replace, the new items will be inserted where you specified, and the remaining items will move accordingly:
${FullCode(`
thislist = ["apple", "banana", "cherry"]
thislist[1:2] = ["blackcurrant", "watermelon"]
print(thislist)`)}
Change the second value by replacing it with two new values
${OutputCode(`['apple', 'blackcurrant', 'watermelon', 'cherry']`)}
${Note(`The length of the list will change when the number of items inserted does not match the number of items replaced.`)}
If you insert less items than you replace, the new items will be inserted where you specified, and the remaining items will move accordingly
${FullCode(`
thislist = ["apple", "banana", "cherry"]
thislist[1:3] = ["watermelon"]
print(thislist)`)}
Change the second and third value by replacing it with one value
${OutputCode(`['apple', 'watermelon']`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Insert Items"; //title
window["msg"+k] = `
To insert a new list item, without replacing any of the existing values, we can use the ${WordCode('insert()')} method.
<br><br>
The ${WordCode('insert()')} method inserts an item at the specified index:
${FullCode(`
thislist = ["apple", "banana", "cherry"]
thislist.insert(2, "watermelon")
print(thislist)`)}
Insert "watermelon" as the third item
${OutputCode(`['apple', 'banana', 'watermelon', 'cherry']`)}
${Note('As a result of the example above, the list will now contain 4 items.')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Add List Items"; //title
window["msg"+k] = `
<h3>Append Items</h3>
To add an item to the end of the list, use the ${WordCode('append()')} method:
${FullCode(`
thislist = ["apple", "banana", "cherry"]
thislist.append("orange")
print(thislist)`)}
${OutputCode(`['apple', 'banana', 'cherry', 'orange']`)}
<h3>Insert Items</h3>
To insert a list item at a specified index, use the ${WordCode('insert()')} method.
<br><br>
The ${WordCode('insert()')} method inserts an item at the specified index:
${FullCode(`
thislist = ["apple", "banana", "cherry"]
thislist.insert(1, "orange")
print(thislist)`)}
${OutputCode(`['apple', 'orange', 'banana', 'cherry']`)}
${Note('As a result of the examples above, the lists will now contain 4 items.')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Remove List Items"; //title
window["msg"+k] = `
<h2>Remove Specified Item</h2>
The ${WordCode('remove()')} method removes the specified item.
${FullCode(`
thislist = ["apple", "banana", "cherry"]
thislist.remove("banana")
print(thislist)`)}
${OutputCode(`['apple', 'cherry']`)}
If there are more than one item with the specified value, the ${WordCode('remove()')} method removes the first occurance
${FullCode(`
thislist = ["apple", "banana", "cherry", "banana", "kiwi"]
thislist.remove("banana")
print(thislist)`)}
${OutputCode(`['apple', 'cherry', 'banana', 'kiwi']`)}
<h2>Remove Specified Index</h2>
The ${WordCode('pop()')} method removes the specified index.
${FullCode(`
thislist = ["apple", "banana", "cherry"]
thislist.pop(1)
print(thislist)`)}
${OutputCode(`['apple', 'cherry']`)}
If you do not specify the index, the ${WordCode('pop()')} method removes the last item.
${FullCode(`
thislist = ["apple", "banana", "cherry"]
thislist.pop()
print(thislist)`)}
${OutputCode("['apple', 'banana']")}
The ${WordCode('del')} keyword also removes the specified index:
${FullCode(`
thislist = ["apple", "banana", "cherry"]
del thislist[0]
print(thislist)`)}
${OutputCode("['banana', 'cherry']")}
The ${WordCode('del')} keyword can also delete the list completely.
${FullCode(`
thislist = ["apple", "banana", "cherry"]
del thislist`)}
${Note('Printing "thislist" after deletion will cause an error because that particular variable is no longer exist.')}
<h2>Clear the List</h2>
The ${WordCode('clear()')} method empties the list.
<br><br>
The list still remains, but it has no content.
${FullCode(`
thislist = ["apple", "banana", "cherry"]
thislist.clear()
print(thislist)`)}
${OutputCode('[]')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Sort Lists"; //title
window["msg"+k] = `
<h2>Sort List Alphanumerically</h2>
List objects have a ${WordCode('sort()')} method that will sort the list alphanumerically, ascending, by default:
${FullCode(`
thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort()
print(thislist)`, 'Sort the list alphabetically:')}
${OutputCode("['banana', 'kiwi', 'mango', 'orange', 'pineapple']")}
${FullCode(`
thislist = [100, 50, 65, 82, 23]
thislist.sort()
print(thislist)`, 'Sort the list numerically:')}
${OutputCode('[23, 50, 65, 82, 100]')}
<h2>Sort Descending</h2>
To sort descending, use the keyword argument ${WordCode('reverse = True')}:
${FullCode(`
thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort(reverse = True)
print(thislist)`, 'Sort the list descending:')}
${OutputCode("['pineapple', 'orange', 'mango', 'kiwi', 'banana']")}
${FullCode(`
thislist = [100, 50, 65, 82, 23]
thislist.sort(reverse = True)
print(thislist)`, 'Sort the list descending:')}
${OutputCode('[100, 82, 65, 50, 23]')}

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Copy Lists"; //title
window["msg"+k] = `
<h2>Copy a List</h2>
You cannot copy a list simply by typing ${WordCode('list2 = list1')}, because: ${WordCode('list2')} will only be a reference to ${WordCode('list1')}, and changes made in ${WordCode('list1')} will automatically also be made in ${WordCode('list2')}.
<br><br>
There are ways to make a copy, one way is to use the built-in List method ${WordCode('copy()')}.
${FullCode(`
thislist = ["apple", "banana", "cherry"]
mylist = thislist.copy()
print(mylist)`, `Make a copy of a list with the ${WordCode('copy()')} method:`)}
${OutputCode("['apple', 'banana', 'cherry']")}
Another way to make a copy is to use the built-in method ${WordCode('list()')}.
${FullCode(`
thislist = ["apple", "banana", "cherry"]
mylist = list(thislist)
print(mylist)`, `Make a copy of a list with the ${WordCode('list()')} method:`)}
${OutputCode("['apple', 'banana', 'cherry']")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Join Lists"; //title
window["msg"+k] = `
<h2>Join Two Lists</h2>
There are several ways to join, or concatenate, two or more lists in Python.
<br><br>
One of the easiest ways are by using the ${WordCode('+')} operator.
${FullCode(`
list1 = ["a", "b", "c"]
list2 = [1, 2, 3]

list3 = list1 + list2
print(list3)`, 'Join two list:')}
${OutputCode("['a', 'b', 'c', 1, 2, 3]")}
Or you can use the ${WordCode('extend()')} method, where the purpose is to add elements from one list to another list:
${FullCode(`
list1 = ["a", "b" , "c"]
list2 = [1, 2, 3]

list1.extend(list2)
print(list1)`, `Use the ${WordCode('extend()')} method to add list2 at the end of list1:`)}
${OutputCode("['a', 'b', 'c', 1, 2, 3]")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "List Methods"; //title
window["msg"+k] = `
Python has a set of built-in methods that you can use on lists.
<br><br>
${WordCode('append()')}: Adds an element at the end of the list
<hr>
${WordCode('clear()')}:	Removes all the elements from the list
<hr>
${WordCode('copy()')}:	Returns a copy of the list
<hr>
${WordCode('count()')}:	Returns the number of elements with the specified value
<hr>
${WordCode('extend()')}:	Add the elements of a list (or any iterable), to the end of the current list
<hr>
${WordCode('index()')}:	Returns the index of the first element with the specified value
<hr>
${WordCode('insert()')}:	Adds an element at the specified position
<hr>
${WordCode('pop()')}:	Removes the element at the specified position
<hr>
${WordCode('remove()')}:	Removes the item with the specified value
<hr>
${WordCode('reverse()')}:	Reverses the order of the list
<hr>
${WordCode('sort()')}:	Sorts the list
<hr>
`; //message


totalLevel = k;