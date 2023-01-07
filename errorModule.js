const api = require('./api.js');

// An error-first callback
let errorFirstCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong. ${err}\n`);
  } else {
    console.log(`Something went right. Data: ${data}\n`);
  }
};

api.errorProneAsyncApi('problematic input', errorFirstCallback);

// Many async Node APIs use error-first callback functions, callback functions which have an error as the first expected argument and the data as the second argument.

// If the async task results in an error, it will be passed in as the first argument to the callback function. 

// If no error was thrown, the first argument will be undefined.