// const http = require("http");

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    res.send('<h1>hello from express<h1>');
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);