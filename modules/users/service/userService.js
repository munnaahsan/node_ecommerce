const User = require('../models/User');

/**
 * Create a new user and return it
 * @param {object} userInput it is user input with all variables for user model
 */
const addUser = async (userInput) => {  
    const user = new User(userInput);
    await user.save()
    return user
}

module.exports = { addUser }