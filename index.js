const express = require('express')
const bodyParser = require('body-parser')
const packageName = require('./models/User');

require('./utils/db.config'); 
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))



app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  return res.render('index')
})

app.get('/register', (req, res) => {
  return res.render('register')
})
app.post('/register', (req,res) => {
  return res.send(req.body)
})
app.listen(3000, () => {
  console.log('Server Runnning on Port 30000')
})

module.exports = app
