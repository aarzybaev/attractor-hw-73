const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;
const password = 'attractor';

app.get('/', (request, response) => {
    response.send('We are live on ' + port);
});
app.get('/:echo', (request, response) => {
    response.send('Echo: ' + request.params.echo);
});

app.get('/encode/:message', (request, response) => {
   const message = request.params.message;
   const encodedMessage = Vigenere.Cipher(password).crypt(message);
   response.send(encodedMessage);
});


app.listen(port, () => {
   console.log('We are live on ' + port);
});