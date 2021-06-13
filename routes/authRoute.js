const express = require('express');


const router = express.Router();

const { addUser } = require('../modules/users/service/userService');
const { registerSchema } = require('../modules/users/validations/authValidation')


/**
 * Shows page for user registration
 */
router.get('/register', (req,res) => {
  return res.render('register', {message: null})
})



/**
 * Handles user registration
 */

 router.post('/register', async (req,res) => {
   try {
     const validationResult = registerSchema.validate(req.body, {
       abortEarly: false
     })

     if(validationResult.error) {
      return res.render('register', {message: "Validation Error"});
     }

    const user = await addUser(req.body)
    // return res.send(validationResult)
    return res.render('register', {message: "Registration Successfully"});
   } catch (e) {
    console.log(e);
    return res.status(400).render('register', {message: "Something Went Wrong"});
   }
   
})

module.exports = router

