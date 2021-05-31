const express = require('express')
const app = express();

app.get('/', (req,res) => {
    return res.send("Hello Munna");
})

app.listen(3000, () => {
    console.log("Server Runnning on Port 30000");
})


module.exports = app