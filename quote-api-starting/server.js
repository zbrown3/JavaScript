const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is now listening on port: ${PORT}`);
})

app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    const quoteObj = { quote: randomQuote }
    res.send(quoteObj);
})

app.get('/api/quotes', (req, res, next) => {
    let personArr = [];
    let person = req.query.person;
    if (person) {
        quotes.forEach(i => {
            if (i.person === person) {
                personArr.push(i);
            }
        })
        const quotesArr = { quotes: personArr};
        res.send(quotesArr);
    } else {
        quotes.forEach(i => {
            personArr.push(i)
        })
        const quotesArr = { quotes: personArr};
        res.send(quotesArr);
    }

})

app.post('/api/quotes', (req, res, next) => {
    let newQuote = req.query.quote;
    let newPerson = req.query.person;
    if(newQuote && newPerson) {
        let quoteObj = {
            quote: newQuote,
            person: newPerson
        }
        quotes.push(quoteObj);
        let resObj = {
            quote: quoteObj
        }
        res.status(201).send(resObj);
    } else {
        res.status(400).send();
    }
})