const express = require('express');
const app = express();
const port = 3000
const path = require("path");

app.use(express.static("/home/hoglar/opennote_re/frontend"))

app.get("/", (req, res) => {
    console.log("Here")
})


app.get("/api", (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join("/home/hoglar/opennote_re/frontend", "/index.html"));
})


app.listen(port, () => {
    console.log("Running at port")
})