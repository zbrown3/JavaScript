// Allocate buffer of size 15 filled with 'b'
const bufferAlloc = Buffer.alloc(15, 'b'); // creates a new Buffer object with the size specified as the first parameter.

// Create buffer1 with 'hello' and buffer2 with 'world'
const buffer1 = Buffer.from('hello'); // creates new Buffer object from the specified string, array, or buffer.
const buffer2 = Buffer.from('world');

  
// Combine buffer1 and buffer2
const bufferArray = [buffer1, buffer2];
const bufferConcat = Buffer.concat(bufferArray); // joins all Buffer objects passed in an array into one Buffer object.


// Translate buffer to string
const bufferString = bufferConcat.toString(); // translates the Buffer object into a human readable string.


// Uncomment the apropriate `console.log()` to ouput to console
console.log(bufferAlloc);
console.log('Buffer 1:', buffer1, 'Buffer 2:', buffer2)
console.log(bufferConcat);
console.log(bufferString);

/* 
The buffer module is used to handle binary data. A buffer object represents a fixed amount of memory that can't be resized.
Buffer objects are similar to an array of integers where each element in the array represents a byte of data.
The buffer object will have a ranger of integers from 0 to 255 inclusive.

*/ 