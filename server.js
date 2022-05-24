const express = require('express');
const app = express();
const port = 3000
const path = require("path");

const project_root = path.join(__dirname, "/..")

app.use(express.static(path.join(project_root, "/public")));

app.get("/", (req, res) => {
    console.log("Here")
})


app.get("/api", (req, res) => {
    console.log(project_root);
    res.sendFile(path.join("/home/hoglar/opennote_re/frontend", "/index.html"));
})


app.listen(port, () => {
    console.log("Server is up and running!")
})