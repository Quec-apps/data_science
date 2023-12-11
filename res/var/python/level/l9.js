//set
k=0;

k++;
window["type"+k] = "message";
window["ti"+k] = "Set"; //title
window["msg"+k] = `
Sets are used to store multiple items in a single variable.
<br><br>
Set is one of 4 built-in data types in Python used to store collections of data, the other 3 are List, Tuple, and Dictionary, all with different qualities and usage.
<br><br>
A set is a collection which is <i>unordered</i>, <i>unchangeable</i>*, and <i>unindexed</i>.
${Note('* Set items are unchangeable, but you can remove items and add new items.')}
Sets are written with curly brackets.
${FullCode(`
thisset = {"apple", "banana", "cherry"}
print(thisset)`)}
${OutputCode(`{'cherry', 'apple', 'banana'}`)}
${Note('Sets are unordered, so you cannot be sure in which order the items will appear.')}

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Set Items"; //title
window["msg"+k] = `
Set items are unordered, unchangeable, and do not allow duplicate values.
<h3>Unordered</h3>
Unordered means that the items in a set do not have a defined order.
<br><br>
Set items can appear in a different order every time you use them, and cannot be referred to by index or key.
<h3>Unchangeable</h3>
Set items are unchangeable, meaning that we cannot change the items after the set has been created.
${Note('Once a set is created, you cannot change its items, but you can remove items and add new items.')}
<h3>Duplicates Not Allowed</h3>
Sets cannot have two items with the same value.
${FullCode(`
thisset = {"apple", "banana", "cherry", "apple"}

print(thisset)`, 'Duplicate values will be ignored:')}
${OutputCode("{'banana', 'cherry', 'apple'}")}
${Note(`The values ${WordCode('True')} and ${WordCode('1')} are considered the same value in sets, and are treated as duplicates:`)}
${FullCode(`
thisset = {"apple", "banana", "cherry", True, 1, 2}

print(thisset)`, `${WordCode('True')} and ${WordCode('1')} is considered the same value`)}
${OutputCode("{True, 2, 'banana', 'cherry', 'apple'}")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Get the Length of a Set"; //title
window["msg"+k] = `
To determine how many items a set has, use the ${WordCode('len()')} function.
${FullCode(`
thisset = {"apple", "banana", "cherry"}
print(len(thisset))`)}
${OutputCode('3')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Set Items - Data Types"; //title
window["msg"+k] = `
Set items can be of any data type:
${FullCode(`
set1 = {"apple", "banana", "cherry"}
set2 = {1, 5, 7, 9, 3}
set3 = {True, False, False}`, 'String, int and boolean data types:')}
A set can contain different data types:
${FullCode(`set1 = {"abc", 34, True, 40, "male"}`, 'A set with strings, integers and boolean values:')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "type()"; //title
window["msg"+k] = `
From Python's perspective, sets are defined as objects with the data type 'set':
${FullCode(`
myset = {"apple", "banana", "cherry"}
print(type(myset))`)}
${OutputCode(`&lt;class 'set'&gt;`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Access Set Items"; //title
window["msg"+k] = `
You cannot access items in a set by referring to an index or a key.
<br><br>
But you can loop through the set items using a ${WordCode('for')} loop, or ask if a specified value is present in a set, by using the ${WordCode('in')} keyword.
${Note(`You will learn more about ${WordCode('for')} loop and ${WordCode('in')} keyword through upcoming chapters.`)}
${FullCode(`
thisset = {"apple", "banana", "cherry"}
for x in thisset:
  print(x)`, 'Loop through the set, and print the values:')}
${OutputCode(`
cherry
banana
apple`)}
${FullCode(`
thisset = {"apple", "banana", "cherry"}
print("banana" in thisset)`, 'Check if "banana" is present in the set:')}
${OutputCode('True')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Change Items"; //title
window["msg"+k] = `
Once a set is created, you cannot change its items, but you can add new items.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Add Items"; //title
window["msg"+k] = `
To add one item to a set use the ${WordCode('add()')} method.
${FullCode(`
thisset = {"apple", "banana", "cherry"}
thisset.add("orange")
print(thisset)`, `Add an item to a set, using the ${WordCode('add()')} method:`)}
${OutputCode("{'banana', 'cherry', 'apple', 'orange'}")}

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Add Sets"; //title
window["msg"+k] = `
To add items from another set into the current set, use the ${WordCode('update()')} method.
${FullCode(`
thisset = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}
thisset.update(tropical)
print(thisset)`, `Add elements from ${WordCode('tropical')} into ${WordCode('thisset')}:`)}
${OutputCode("{'apple', 'mango', 'cherry', 'pineapple', 'banana', 'papaya'}")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Add Any Iterable"; //title
window["msg"+k] = `
The object in the ${WordCode('update()')} method does not have to be a set, it can be any iterable object (tuples, lists, dictionaries* etc.).
${Note(`* You will learn more about ${WordCode('dict')}(dictionary) data type in future chapter.`)}
${FullCode(`
thisset = {"apple", "banana", "cherry"}
mylist = ["kiwi", "orange"]
thisset.update(mylist)
print(thisset)`, 'Add elements of a list to at set:')}
${OutputCode("{'banana', 'cherry', 'apple', 'orange', 'kiwi'}")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Remove Set Items"; //title
window["msg"+k] = `
To remove an item in a set, use the ${WordCode('remove()')}, or the ${WordCode('discard()')} method.
${FullCode(`
thisset = {"apple", "banana", "cherry"}
thisset.remove("banana")
print(thisset)`, `Remove "banana" by using the ${WordCode('remove()')} method:`)}
${OutputCode("{'cherry', 'apple'}")}
${Note(`If the item to remove does not exist, ${WordCode('remove()')} will raise an error.`)}
${FullCode(`
thisset = {"apple", "banana", "cherry"}
thisset.discard("banana")
print(thisset)`, `Remove "banana" by using the ${WordCode('discard()')} method:`)}
${OutputCode("{'apple', 'cherry'}")}
${Note(`If the item to remove does not exist, ${WordCode('discard()')} will <b>NOT</b> raise an error.`)}
You can also use the ${WordCode('pop()')} method to remove an item, but this method will remove a random item, so you cannot be sure what item that gets removed.
<br><br>
The return value of the ${WordCode('pop()')} method is the removed item.
${FullCode(`
thisset = {"apple", "banana", "cherry"}
x = thisset.pop()
print(x) #removed item
print(thisset) #the set after removal`, `Remove a random item by using the ${WordCode('pop()')} method:`)}
${OutputCode(`
cherry
{'apple', 'banana'}`)}
${Note(`Sets are unordered, so when using the ${WordCode('pop()')} method, you do not know which item that gets removed.`)}
${FullCode(`
thisset = {"apple", "banana", "cherry"}
thisset.clear()
print(thisset)`, `The ${WordCode('clear()')} method empties the set:`)}
${OutputCode(`set()`)}
${FullCode(`
thisset = {"apple", "banana", "cherry"}
del thisset
print(thisset)
#this will raise an error because the set no longer exists`, `The ${WordCode('del')} keyword will delete the set completely:`)}
${OutputCode("NameError: name 'thisset' is not defined",true)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Join Sets"; //title
window["msg"+k] = `
<h3>Join Two Sets</h3>
There are several ways to join two or more sets in Python.
<br><br>
You can use the ${WordCode('union()')} method that returns a new set containing all items from both sets, or the ${WordCode('update()')} method that inserts all the items from one set into another:
${FullCode(`
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}

set3 = set1.union(set2)
print(set3)`,`The ${WordCode('union()')} method returns a new set with all items from both sets:`)}
${OutputCode("{3, 'c', 'a', 2, 'b', 1}")}
${FullCode(`
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}

set1.update(set2)
print(set1)`,`The ${WordCode('update()')} method inserts the items in set2 into set1:`)}
${OutputCode("{2, 3, 'a', 1, 'b', 'c'}")}
${Note(`Both ${WordCode('union()')} and ${WordCode('update()')} will exclude any duplicate items.`)}
<h3>Keep ONLY the Duplicates</h3>
The ${WordCode('intersection_update()')} method will keep only the items that are present in both sets.
${FullCode(`
x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}

x.intersection_update(y)
print(x)`,`Keep the items that exist in both set ${WordCode('x')}, and set ${WordCode('y')}:`)}
${OutputCode(`{'apple'}`)}
The ${WordCode('intersection()')} method will return a new set, that only contains the items that are present in both sets.
${FullCode(`
x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}

z = x.intersection(y)
print(z)`, `Return a set that contains the items that exist in both set ${WordCode('x')}, and set ${WordCode('y')}:`)}
${OutputCode("{'apple'}")}
<h3>Keep All, But NOT the Duplicates</h3>
The ${WordCode('symmetric_difference_update()')} method will keep only the elements that are NOT present in both sets.
${FullCode(`
x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}

x.symmetric_difference_update(y)
print(x)`, 'Keep the items that are not present in both sets:')}
${OutputCode("{'google', 'banana', 'microsoft', 'cherry'}")}
The ${WordCode('symmetric_difference()')} method will return a new set, that contains only the elements that are NOT present in both sets.
${FullCode(`
x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}

z = x.symmetric_difference(y)
print(z)`, `Return a set that contains all items from both sets, except items that are present in both:`)}
${OutputCode("{'google', 'banana', 'microsoft', 'cherry'}")}
${Note(`The values ${WordCode('True')} and ${WordCode('1')} are considered the same value in sets, and are treated as duplicates:`)}
${FullCode(`
x = {"apple", "banana", "cherry", True}
y = {"google", 1, "apple", 2}

z = x.symmetric_difference(y)
print(z)`, 'Example:')}
${OutputCode("{2, 'google', 'cherry', 'banana'}")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Set Methods"; //title
window["msg"+k] = `
${WordCode('add()')}	Adds an element to the set<hr>
${WordCode('clear()')}	Removes all the elements from the set<hr>
${WordCode('copy()')}	Returns a copy of the set<hr>
${WordCode('difference()')}	Returns a set containing the difference between two or more sets<hr>
${WordCode('difference_update()')}	Removes the items in this set that are also included in another, specified set<hr>
${WordCode('discard()')}	Remove the specified item<hr>
${WordCode('intersection()')}	Returns a set, that is the intersection of two other sets<hr>
${WordCode('intersection_update()')}	Removes the items in this set that are not present in other, specified set(s)<hr>
${WordCode('isdisjoint()')}	Returns whether two sets have a intersection or not<hr>
${WordCode('issubset()')}	Returns whether another set contains this set or not<hr>
${WordCode('issuperset()')} Returns whether this set contains another set or not<hr>
${WordCode('pop()')}	Removes an element from the set<hr>
${WordCode('remove()')}	Removes the specified element<hr>
${WordCode('symmetric_difference()')}	Returns a set with the symmetric differences of two sets<hr>
${WordCode('symmetric_difference_update()')}	inserts the symmetric differences from this set and another<hr>
${WordCode('union()')}	Return a set containing the union of sets<hr>
${WordCode('update()')}	Update the set with the union of this set and others<hr>
`; //message

totalLevel = k;