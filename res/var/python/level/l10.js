//dict
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Dictionary"; //title
window["msg"+k] = `
Dictionaries are used to store data values in key:value pairs.
<br><br>
A dictionary is a collection which is ordered, changeable and do not allow duplicates.
<br><br>
Dictionaries are written with curly brackets, and have keys and values:
${FullCode(`
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)`, 'Create and print a dictionary:')}
${OutputCode("{'brand': 'Ford', 'model': 'Mustang', 'year': 1964}")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Dictionary Items"; //title
window["msg"+k] = `
Dictionary items are ordered, changeable, and does not allow duplicates.
<br><br>
Dictionary items are presented in key:value pairs, and can be referred to by using the key name.
${FullCode(`
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict["brand"])`, 'Print the "brand" value of the dictionary:')}
${OutputCode('Ford')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Ordered or Unordered?"; //title
window["msg"+k] = `
When we say that dictionaries are ordered, it means that the items have a defined order, and that order will not change.
<br><br>
Unordered means that the items does not have a defined order, you cannot refer to an item by using an index.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Changeable"; //title
window["msg"+k] = `
Dictionaries are changeable, meaning that we can change, add or remove items after the dictionary has been created.
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Duplicates Not Allowed"; //title
window["msg"+k] = `
Dictionaries cannot have two items with the same key:
${FullCode(`
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964,
  "year": 2020
}
print(thisdict)`, 'Duplicate values will overwrite existing values:')}
${OutputCode("{'brand': 'Ford', 'model': 'Mustang', 'year': 2020}")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Dictionary Length"; //title
window["msg"+k] = `
To determine how many items a dictionary has, use the ${WordCode('len()')} function:
${FullCode(`
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964,
  "year": 2020
}
print(len(thisdict))`, 'Print the number of items in the dictionary:')}
${OutputCode('3')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Dictionary Items - Data Types"; //title
window["msg"+k] = `
The values in dictionary items can be of any data type:
${FullCode(`
thisdict = {
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
}

print(thisdict)`, `String, int, boolean, and list data types:`)}
${OutputCode(`{'brand': 'Ford', 'electric': False, 'year': 1964, 'colors': ['red', 'white', 'blue']}`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "type()"; //title
window["msg"+k] = `
From Python's perspective, dictionaries are defined as objects with the data type 'dict':
${FullCode(`
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(type(thisdict))`)}
${OutputCode("&lt;class 'dict'&gt;")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "dict() Constructor"; //title
window["msg"+k] = `
It is also possible to use the ${WordCode('dict()')} constructor to make a dictionary.
${FullCode(`
thisdict = dict(name = "John", age = 36, country = "Norway")
print(thisdict) `)}
${OutputCode("{'name': 'John', 'age': 36, 'country': 'Norway'}")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Access Dictionary Items"; //title
window["msg"+k] = `
You can access the items of a dictionary by referring to its key name, inside square brackets:
${FullCode(`
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict["model"]
print(x)`, 'Get the value of the "model" key:')}
${OutputCode("Mustang")}
There is also a method called ${WordCode('get()')} that will give you the same result:
${FullCode(`
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict.get("model")
print(x)`, 'Get the value of the "model" key:')}
${OutputCode("Mustang")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Get Keys"; //title
window["msg"+k] = `
The ${WordCode('keys()')} method will return a list of all the keys in the dictionary.
${FullCode(`
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = thisdict.keys()
print(x)`, 'Get a list of the keys:')}
${OutputCode(`dict_keys(['brand', 'model', 'year'])`)}
The list of the keys is a <i>view</i> of the dictionary, meaning that any changes done to the dictionary will be reflected in the keys list.
${FullCode(`
car = {
"brand": "Ford",
"model": "Mustang",
"year": 1964
}

x = car.keys()
print(x) #before the change
car["color"] = "white"
print(x) #after the change`, 'Add a new item to the original dictionary, and see that the keys list gets updated as well:')}
${OutputCode(`
dict_keys(['brand', 'model', 'year'])
dict_keys(['brand', 'model', 'year', 'color'])`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Get Values"; //title
window["msg"+k] = `
The ${WordCode('values()')} method will return a list of all the values in the dictionary.
${FullCode(`
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = thisdict.values()
print(x)`)}
${OutputCode("dict_values(['Ford', 'Mustang', 1964])")}

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Get Items"; //title
window["msg"+k] = `
The ${WordCode('items()')} method will return each item in a dictionary, as tuples in a list.
${FullCode(`
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = thisdict.items()
print(x)`)}
${OutputCode("dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)])")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Check if Key Exists"; //title
window["msg"+k] = `
To determine if a specified key is present in a dictionary use the ${WordCode('in')} keyword:
${FullCode(`
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
if "model" in thisdict:
  print("Yes, 'model' is present")`, `Check if "model" is present in the dictionary:`)}
${OutputCode("Yes, 'model' is present")}
${Note(`You will learn more about ${WordCode('if')} statement and ${WordCode('in')} keyword through upcoming chapters.`)}

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Change Values"; //title
window["msg"+k] = `
You can change the value of a specific item by referring to its key name:
${FullCode(`
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

thisdict["year"] = 2018
print(thisdict)`,'Change the "year" to 2018:')}
${OutputCode("{'brand': 'Ford', 'model': 'Mustang', 'year': 2018}")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Update Dictionary"; //title
window["msg"+k] = `
The ${WordCode('update()')} method will update the dictionary with the items from the given argument.
<br><br>
The argument must be a dictionary, or an iterable object with key:value pairs.
${FullCode(`
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.update({"year": 2020})
print(thisdict)`, 'Update the "year" of the car by using the update() method:')}
${OutputCode("{'brand': 'Ford', 'model': 'Mustang', 'year': 2020}")}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Add Dictionary Items"; //title
window["msg"+k] = `
Adding an item to the dictionary is done by using a new index key and assigning a value to it:
${FullCode(`
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict["color"] = "red"
print(thisdict)`)}
${OutputCode("{'brand': 'Ford', 'model': 'Mustang', 'year': 1964, 'color': 'red'}")}
<h3>Update Dictionary</h3>
The ${WordCode('update()')} method will update the dictionary with the items from a given argument. If the item does not exist, the item will be added.
<br><br>
The argument must be a dictionary, or an iterable object with key:value pairs.
${FullCode(`
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.update({"color": "red"})
print(thisdict)`, `Add a color item to the dictionary by using the ${WordCode('update()')} method:`)}
${OutputCode(`{'brand': 'Ford', 'model': 'Mustang', 'year': 1964, 'color': 'red'}`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Remove Dictionary Items"; //title
window["msg"+k] = `
There are several methods to remove items from a dictionary:
${FullCode(`
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.pop("model")
print(thisdict)`, `The ${WordCode('pop()')} method removes the item with the specified key name:`)}
${OutputCode("{'brand': 'Ford', 'year': 1964}")}
${FullCode(`
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.popitem()
print(thisdict)`, `The ${WordCode('popitem()')} method removes the last inserted item (in versions before 3.7, a random item is removed instead):`)}
${OutputCode("{'brand': 'Ford', 'model': 'Mustang'}")}
${FullCode(`
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
del thisdict["model"]
print(thisdict)`, `The ${WordCode('del')} keyword removes the item with the specified key name:`)}
${OutputCode("{'brand': 'Ford', 'year': 1964}")}
${FullCode(`
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
del thisdict
print(thisdict)
#this will cause an error because "thisdict" no longer exists.`, `The ${WordCode('del')} keyword can also delete the dictionary completely:`)}
${OutputCode("NameError: name 'thisdict' is not defined", true)}
${FullCode(`
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.clear()
print(thisdict)`, `The ${WordCode('clear()')} method empties the dictionary:`)}
${OutputCode('{}')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Copy a Dictionary"; //title
window["msg"+k] = `
You cannot copy a dictionary simply by typing ${WordCode('dict2 = dict1')}, because: ${WordCode('dict2')} will only be a reference to ${WordCode('dict1')}, and changes made in ${WordCode('dict1')} will automatically also be made in ${WordCode('dict2')}.
<br><br>
There are ways to make a copy, one way is to use the built-in Dictionary method ${WordCode('copy()')}.
${FullCode(`
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
mydict = thisdict.copy()
print(mydict)`, `Make a copy of a dictionary with the ${WordCode('copy()')} method:`)}
${OutputCode(`{'brand': 'Ford', 'model': 'Mustang', 'year': 1964}`)}
Another way to make a copy is to use the built-in function ${WordCode('dict()')}.
${FullCode(`
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
mydict = dict(thisdict)
print(mydict)`, `Make a copy of a dictionary with the ${WordCode('dict()')} function:`)}
${OutputCode(`{'brand': 'Ford', 'model': 'Mustang', 'year': 1964}`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Nested Dictionaries"; //title
window["msg"+k] = `
A dictionary can contain dictionaries, this is called nested dictionaries.
${FullCode(`
myfamily = {
  "child1" : {
    "name" : "Emil",
    "year" : 2004
  },
  "child2" : {
    "name" : "Tobias",
    "year" : 2007
  },
  "child3" : {
    "name" : "Linus",
    "year" : 2011
  }
}`, `Create a dictionary that contain three dictionaries:`)}
Or, if you want to add three dictionaries into a new dictionary:
${FullCode(`
child1 = {
  "name" : "Emil",
  "year" : 2004
}
child2 = {
  "name" : "Tobias",
  "year" : 2007
}
child3 = {
  "name" : "Linus",
  "year" : 2011
}

myfamily = {
  "child1" : child1,
  "child2" : child2,
  "child3" : child3
}`, `Create three dictionaries, then create one dictionary that will contain the other three dictionaries:`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Access Items in Nested Dictionaries"; //title
window["msg"+k] = `
To access items from a nested dictionary, you use the name of the dictionaries, starting with the outer dictionary:
${FullCode(`
myfamily = {
  "child1" : {
    "name" : "Emil",
    "year" : 2004
  },
  "child2" : {
    "name" : "Tobias",
    "year" : 2007
  },
  "child3" : {
    "name" : "Linus",
    "year" : 2011
  }
}

print(myfamily["child2"]["name"])`, 'Print the name of child 2:')}
${OutputCode(`Tobias`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Dictionary Methods"; //title
window["msg"+k] = `
${WordCode('clear()')}	Removes all the elements from the dictionary<hr>
${WordCode('copy()')}	Returns a copy of the dictionary<hr>
${WordCode('fromkeys()')}	Returns a dictionary with the specified keys and value<hr>
${WordCode('get()')}	Returns the value of the specified key<hr>
${WordCode('items()')}	Returns a list containing a tuple for each key value pair<hr>
${WordCode('keys()')}	Returns a list containing the dictionary's keys<hr>
${WordCode('pop()')}	Removes the element with the specified key<hr>
${WordCode('popitem()')}	Removes the last inserted key-value pair<hr>
${WordCode('setdefault()')}	Returns the value of the specified key. If the key does not exist: insert the key, with the specified value<hr>
${WordCode('update()')}	Updates the dictionary with the specified key-value pairs<hr>
${WordCode('values()')}	Returns a list of all the values in the dictionary<hr>
`; //message



totalLevel = k;