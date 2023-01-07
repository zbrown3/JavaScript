const authenticate = (req, res, next) => {
    next()
};
   
const validateData = (req, res, next) => {
    next()
};
   
const getSpell = (req, res, next) => {
    res.status(200).send(getSpellById(req.params.id));
};
   
const createSpell = (req, res, next) => {
    createSpellFromRequest(req);
    res.status(201).send();
};
   
const updateSpell = (req, res, next) => {
    updateSpellFromRequest(req);
    res.status(204).send();
};
   
app.get('/spells/:id', authenticate, getSpell);
   
app.post('/spells', authenticate, validateData, createSpell);
   
app.put('/spells/:id', authenticate, validateData, updateSpell);

/*
In the above code sample, we created reusable middleware for authentication and data validation. 
We use the authenticate() middleware to verify a user is logged in before proceeding with the request 
and we use the validateData() middleware before performing the appropriate create or update function. 
Additional middleware can be placed at any point in this chain.
*/
