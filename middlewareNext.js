app.use((req, res, next) => {
    console.log(`${req.method} Request Received`);
    next();
  });


/*
Chaining middleware is referred to as the middleware stack.
The middleware stack is processed in the order they appear in the application file, such that
middleware defined later happens after middleware defined before.
This is regardless of method, app.use() that occurs after an app.get() will get called after the app.get().
An Express middleware is a function with three parameters: (req, res, next).
The sequence is expressed by a set of callback functions invoked progressively after each middleware
performs it's purpose.
next() should get explicitly called as the last part of the middleware's body.
*/