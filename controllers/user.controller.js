const jwtHelper = require('../helpers/jwt.helper')
const db = require('../models')
const User = db.user

const accessTokenSign = process.env.ACCESS_TOKEN_SECRET || "phuonghien"
const accessTokenLife = "1h"

module.exports = {
    login: async(req, res) => {
        var userData = {
            userName: req.body.userName,
            password: req.body.password
        }
        var user = await User.findOne({where: {userName: userData.userName, password: userData.password}})
        if(user !== null) {
            const jwtToken = await jwtHelper.generateToken(userData, accessTokenSign, accessTokenLife)
            res.status(200).json({
                token: jwtToken
            })
        } else {
            res.status(402).send({
                message: "Wrong input data"
            })
        }
    },
    create: (req, res) => {
        var userData = {
            name: req.body.name,
            userName: req.body.userName,
            password: req.body.password
        }
        User.create(userData)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({
                    error: err.message
                })
            })
    },
    testpost: (req, res) => {
        res.json({
            title: req.body.title
        })
    }
}