const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// Open a call to `app.get()` below:
app.get('/expressions', (req, res, next) => {
  console.log(req);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Express searches through routes in the order that they are registered in the code. 
// The first one that is matched will be used, and it's callback will be called.