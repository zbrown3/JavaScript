app.post('/expressions', (req, res, next) => {
    const newElement = createElement('expressions', req.query);
    if (newElement) {
      expressions.push(newElement);
      res.status(201).send(newElement);
    } else {
      res.status(400).send();
    }
})