const express = require('express')
const app = express()
require('./utils/db.config');

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  return res.render('index')
})

app.listen(3000, () => {
  console.log('Server Runnning on Port 30000')
})

module.exports = app
