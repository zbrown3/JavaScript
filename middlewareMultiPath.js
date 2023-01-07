app.use(['/beans/', '/beans/:beanName'], (req, res, next) => {
    let bodyData = '';
    req.on('data', (data) => {
      bodyData += data;
    });
    req.on('end', () => {
      if (bodyData) {
        req.body = JSON.parse(bodyData);
      }
      next();
    }); 
})