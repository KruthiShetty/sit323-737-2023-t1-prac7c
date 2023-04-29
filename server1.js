'use strict';

const express = require ('express');

//constants
const PORT = 8080;
const HOST = '0.0.0.0';

//App
const app = express();
app.get("/", (req, res) => {
    res.send("Hello, SIT737!");
});

//simple time logger middleware
app.use((req, res, next) => {
    console.log(`Time: ${Date.now()}`);
    next();
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});

