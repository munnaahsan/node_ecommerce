const express = require('express')
const bodyParser = require('body-parser')

const authRoute = require('./routes/authRoute');

require('./utils/db.config'); 
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))



app.set('view engine', 'ejs')
app.use('/', authRoute)

app.get('/', (req, res) => {
  return res.render('index')
})


// app.get('/register', (req, res) => {
//   return res.render('register', {message: null})
// })
// app.post('/register', async (req,res) => {  
//   return res.render('register', {message: "Registration Successfully"});
// })
app.listen(3000, () => {
  console.log('Server Runnning on Port 30000')
})

module.exports = app
