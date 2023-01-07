app.param('spellId', (req, res, next, id) => {
    let spellId = Number(id);
      try {
        const found = SpellBook.find((spell) => {
          return spellId === spell.id;
        })
        if (found) {
          req.spell = found;
          next();
        } else {
          next(new Error('Your magic spell was not found in any of our tomes'));
        };
      } catch (err) {
        next(err)
      }
});

app.param('snackId', (req, res, next, id) => {
  const snackId = Number(id);
  const snackIndex = vendingMachine.findIndex(snack => snack.id === snackId);
  if (snackIndex === -1) {
    res.status(404).send('Snack not found!');
  } else {
    req.snackIndex = snackIndex;
    next();
  }
});


/*
When a specific parameter is present in a route, we can write a function that will perform the necessary lookup and attach it to the req object
in subsequent middleware that is run. 
Inside an app.param callback, you should use the fourth argument as the parameter’s value, not a key from the req.params object.
*/