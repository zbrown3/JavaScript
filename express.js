const express = require('express');

// Instantiate the app
const app = express();

const PORT = process.env.PORT || 4001;

// Invoke the app's .listen() method
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

// path for url localhost:4001/