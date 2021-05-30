const express = require('express')
const app = express();

app.get('/', function(req,res) {
    return res.send("Hello Munna");
})

app.listen(3000, function() {
    console.log("Server Runnning on Port 30000");
})