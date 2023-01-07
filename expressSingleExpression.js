const monsters = { 
    hydra: { height: 3, age: 4 }, 
    dragon: { height: 200, age: 350 } 
  };
  // GET /monsters/hydra
  app.get('/monsters/:name', (req, res, next) => {
    console.log(req.params); // { name: 'hydra' }
    res.send(monsters[req.params.name]);
  });

  /*
  Routes are used dynamically through route parameters.  Parameters are route path segments that begin with : in their Express route definitions.
  They act as wildcards, matching any text at that path segment.
  Express parses any paramters, extracts their actual values, and attaches them as an object to the request object: req.params.
  This object's keys are any parameter names in the route, and each key's value is the actual value of that field per request.
  */