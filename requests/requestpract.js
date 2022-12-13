const axios = require('axios')

axios.get('https://swapi.dev/api/people/1/')

    .then(res => console.log(res.data))
    .catch(err => console.log(err))