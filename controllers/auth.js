require('dotenv').config({ path: '../.env' })
const db = require("../models");
const jwt = require('jsonwebtoken');


module.exports = {
    verifyUser: async function (req, res) {
        const authtoken = await req.headers.authorization.split(" ")
        if (!("authorization" in req.headers)) {
            return res.status(401).send("No authorization token")
        }
        try {
            const response = await jwt.verify(authtoken[1], process.env.JWT_SECRET)
            const user = await db.Users.findById({ _id: response.userId })
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).send("user not found")
            }
        } catch (error) {
            res.status(500).json(err, "something went wrong finding user")
        }
    },
    login: async function (req, res) {
        try {
            const user = await db.Users.findOne({ username: req.body.username })
            const passwordsMatch = await user.checkPassword(req.body.password)

            if (passwordsMatch) {
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
                    expiresIn: '1h'
                })
                res.status(200).json(token)
            } else {
                res.status(401).send("incorrect password/user")
            }
        } catch (error) {
            console.error(error)
            res.status(500).send("Error loggin in user")
        }
    },
    logout: async function (req, res) {
        console.log(req)
        req.logout();
        console.log('logout successful')
    }
}