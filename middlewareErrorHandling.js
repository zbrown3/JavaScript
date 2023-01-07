const errorHandler = require('errorhandler');


const err = new Error('Error message here'); // error logic for route
err.status = 400;
return next(err); // passes error to error middleware handler.

app.use(errorHandler());

/*
Error handling middleware needs to be the last app.use() in the file.
The middleware stack progresses through routes as they are presented in a file, therefore the
error handler should sit at the bottom of the file about listen().
*/