const express = require('express')
const bodyParser = require('body-parser')
const User = require('./models/User');

require('./utils/db.config'); 
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))



app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  return res.render('index')
})

app.get('/register', (req, res) => {
  return res.render('register', {message: null})
})
app.post('/register', async (req,res) => {
  const user = new User(req.body);
  await user.save()
  return res.render('register', {message: "Registration Successfully"});

})
app.listen(3000, () => {
  console.log('Server Runnning on Port 30000')
})

module.exports = app
