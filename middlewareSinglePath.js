app.use('/sorcerer', (req, res, next) => {
    console.log('User has hit endpoint /sorcerer');
    next();
});

/*
every request for '/sorcerer' endpoint will call this callback function before moving on to the next chain.
*/