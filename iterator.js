const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => { // returns true or false if any of the elements meets condition within block
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(i => i.length > 5);


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => word.length > 5 )); // returns true or false if every element meets condition within block.
