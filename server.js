const express = require('express');
const Vigenere = require('caesar-salad');
const app = express();
const port = 8000;

app.get('/', (request, response) => {
    response.send('We are live on ' + port);
});
app.get('/:echo', (request, response) => {
    response.send('Echo: ' + request.params.echo);
});

app.listen(port, () => {
   console.log('We are live on ' + port);
});