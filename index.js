const express = require('express'); 
const app = express() 
const port = 5000; 

const allChefs = require('./data/chefs.json')

app.get('/', (req, res) => {

    res.send("Welcome to WeChef"); 
})

app.get('/allChefs', (req, res) => {

    res.send(allChefs); 
})



app.listen(port, () => {

    console.log(`This server is listening to the port number ${port}`);
})