const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};
  
  // Write your code below:

// Executor function generally starts an async operation and dictates how the promise should be settled.
const myExecutor = (resolve, reject) => { // function has two parameters usually called resolve() and reject().
    if (inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.'); // is a function with one argument, if invoked will change the promise status from pending to fulfilled and the promise value will be set to the argument passed into resolve().
    } else {
      reject('That item is sold out.'); // is a function that takes a reason or error as an argument. If invoked, will change the promise's status from pending to rejected and the promise rejected reason will be set to the argument passed into reject().
    }
};

// When the promise constructor runs


  
const orderSunglasses = () => new Promise(myExecutor); // Promise constructor takes a function parameter called the executor function which runs when function is called.
  
const orderPromise = orderSunglasses();
  
console.log(orderPromise);




/*
Promises are objects that represent the eventual outcome of an async operation. 

A Promise object can be in one of three states:
Pending - The initial state - the operation has not completed yet.
Fulfilled - The operation has completed successfully and the promise now has a resolved value. For example, resolved with a JSON object as it's value.
Rejected - The operation has failed and the promise has a reason for the failure.  This reason is usually an error of some kind.

A Promise is settled if it is no longer pending, it is fulfilled or rejected.

*/