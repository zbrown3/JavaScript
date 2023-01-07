const monsters = { '1': { name: 'cerberus', age: '4'  } };
// PUT /monsters/1?name=chimera&age=1
app.put('/monsters/:id', (req, res, next) => {
  const monsterUpdates = req.query;
  monsters[req.params.id] = monsterUpdates;
  res.send(monsters[req.params.id]);
});

/*
Query strings appear at the end of the path in URLs and are indicated with a ? character.
Query strings do not count as part of the route path.  
Express server parses them into a JavaScript object and attaches it to the request body as the value of req.query.
The key: value relationship is indicated by the = character in a query string, and key-value pairs are seperated by &
*/