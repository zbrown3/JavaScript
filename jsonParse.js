const jsonData = '{ "parent": { "name": "Sally", "age": 45, "children" : [ { "name": "Kim", "age": 3 }, { "name": "Lee", "age": 1 } ] } }';

const jsObject = JSON.parse(jsonData); // JSON.parse converts json string to javascript object.

console.log(jsObject.parent.children[0]);