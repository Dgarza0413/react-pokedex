require('dotenv').config({ path: '../../.env' });
const express = require('express');
const router = express.Router();
// const passport = require('passport')
const jwt = require('jsonwebtoken');
const db = require('../../models');
const userController = require('../../controllers/users');
const authController = require('../../controllers/auth');

console.log(process.env.JWT_SECERT)

// /api/addUser
router.get('/getpokemon', async (req, res) => {
    const data = {};
    const url = `https://pokeapi.co/api/v2/pokemon/10`
    try {
        const response = await axios.get(url)
        console.log(response)
        // response.json()
    } catch (error) {
        console.log(error)
    }
})


router.route("/register")
    .get(userController.findAll)
    .post(userController.create);



router.route('/user').get(authController.verifyUser);
router.route('/login').post(authController.login);
router.route("/logout").get(authController.logout);


module.exports = router