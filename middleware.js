app.use((req, res, next) => {
    console.log('Request received');
});


/*
Middleware is code that executes between a server receiving a request and sending a response.
In Express, middleware is a function.  Middleware can perform logic on the request and response objects
such as: inspecting a request, performing some logic based on the request, atching information to the response,
attaching a status to the response, sending the response back to the user, or simply passing the request and 
response to another middleware.
An Express application is essentially a series of middleware function calls.
*/