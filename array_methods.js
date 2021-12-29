const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift(); // removes first element from the array.
groceryList.unshift('popcorn'); // adds item to first index of the array.
console.log(groceryList.slice(1,4)); // prints certain elements of the array based on input paramaters.  (start, end).
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta'); // returns index of given element in the array.
console.log(pastaIndex);