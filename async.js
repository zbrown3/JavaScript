const withAsync = async (num) => {
    if (num === 0) {
      return 'zero';
    } else {
      return 'not zero';
    }
}
  
  
  
// Leave this commented out until step 3:
  
withAsync(0)
    .then((resolveValue) => {
    console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})

/*
async functions always return a promise which means promise syntax .then() and .catch can be used.
async function will return in on of three ways:
If there's nothing returned from the function, it will return a promise with a resolved value of undefined.
If there's a non-promise value returned from the function, it will return a promise resolved to that value.
If a promise is returned from the function, it will simply return that promise.
22
*/