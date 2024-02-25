const express = require('express')
const fs = require ("fs")

const app = express();

const PORT = 8080

app.get("/", (req, res) => {
    const indexHTML = fs.readFileSync(__dirname + "/index.html", "utf-8")
    res.send(indexHTML)
})
app.use("/", express.static(__dirname +"/"))
app.use("/assets/style", express.static(__dirname + "/assets/style/"))
app.use("/assets/img", express.static(__dirname + "/assets/img/"))

app.listen(PORT, () => {
    console.log("le serveur est lancé sur le port " + PORT)
})
