const getData = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people/1/');
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }

        throw new Error('Request failed!');
    } catch (e) {
        console.log(e);
    }
}

getData()
    .then(response => {
        console.log(response.name);
    })