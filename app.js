// const http = require("http");

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(adminRoutes)
app.use(shopRoutes)

app.use((req,res,next) => {
    res.status(404).send("Page not found.");
});


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);