const morgan = require('morgan');

// Logging Middleware
app.use((req, res, next) => {
    morgan('tiny');
    next();
});

/* 
Morgan() is a function that will return a middleware function.
Morgan takes an argument to describe the formatting of the logging output. 
Morgan('tiny) will return a middleware function that does a tiny amount of logging. 
Morgan will log response codes after the response is sent.
Morgan('dev') will log the HTTP method, URL, status code, response time, content length, and changes colors of the status code output based on the code.
*/