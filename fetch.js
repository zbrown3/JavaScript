fetch('https://swapi.dev/api/people/1/')
    .then(res => {
        if(res.ok) {
            return res.json();
        }
        throw new Error('Request failed!');
    }, networkError => {
        console.log(networkError.message);
    })
    .then(res => {
        console.log(res);
    })