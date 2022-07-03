const express = require('express')

const app = express();

app.get('', (req, res) => {
    res.send("hello express page !!")
})

app.get('/test', (req, res) => {
    res.send("server is up and running. test done");
})

app.listen(3000, () => {
    console.log("server is up on port 3000");
})