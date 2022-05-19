const express = require('express');
const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello World from server");
})

app.get("/api", (req, res) => {
    res.send("Hello world from api")
})

app.listen(port, () => {
    console.log("Running at port")
})