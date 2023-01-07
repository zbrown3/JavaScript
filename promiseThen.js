const inventory = {
    sunglasses: 0,
    pants: 1088,
    bags: 1344
};
  
const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let inStock = order.every(item => inventory[item[0]] >= item[1]);
        if (inStock) {
          resolve(`Thank you. Your order was successful.`);
        } else {
          reject(`We're sorry. Your order could not be completed because some items are sold out.`);
        }
      }, 1000);
    })
};
  

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
}

checkInventory(order)
    .then(handleSuccess)
    .catch(handleFailure)


/*
.then() is a higher oder function that takes two callback functions as arguments.   These callbacks are handlers.
When the promise settles, the appropriate handler will be invoked with that settle value.

The first handler is called onFulfilled, is a success handler and should contain the logic for the promise resolving.
The second handler is called onRejected, is a failure handler and should contain the logic for the promise rejecting.

.then() can be invoked with one, both or neither handler.
*/