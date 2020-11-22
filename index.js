const express = require("express");
const app = express();

app.listen(5000, () => {
    console.log('Server has been started');
});

app.get('/', (request, response) => {
    response.status(200).json({
        message: 'Working'
    });
});