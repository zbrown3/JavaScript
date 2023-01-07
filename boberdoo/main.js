const url = 'https://leads.agentscorner.com/apiJSON.php';
const requestBody = {
    Request: {
        Key: "f907d72d47c0a0cb15b1357cd5c8ac9b2d14b68743a7baf9f8ba2f19cfb8c903",
        API_Action: "getFilterSets",
        Format: "JSON",
        Partner_ID: 3
    }
};

const getFilterSets = async () => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(requestBody)
        })
        if(response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }

        throw new Error('Request failed!');
    } catch (e) {
        console.log(e);
    }
}

getFilterSets()
    .then(res => {
        console.log(res.response.filter_sets);
    })