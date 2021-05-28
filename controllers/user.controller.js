const jwtHelper = require('../helpers/jwt.helper')
const db = require('../models')
const User = db.user

const accessTokenSign = process.env.ACCESS_TOKEN_SECRET || "phuonghien"
const accessTokenLife = "100h"
const refreshTokenLife = "240h"

module.exports = {
    login: async(req, res) => {
        var userData = {
            userName: req.body.userName,
            password: req.body.password
        }
        var user = await User.findOne({where: {userName: userData.userName, password: userData.password}})
        if(user !== null) {
            const token = await jwtHelper.generateToken(userData, accessTokenSign, accessTokenLife)
            const refreshToken = await jwtHelper.generateToken(userData, accessTokenSign, accessTokenLife)
            res.status(200).json({
                token,
                refreshToken
            })
        } else {
            res.status(402).send({
                message: "Wrong input data"
            })
        }
    },
    getNewToken: async(req, res) => {
        try {
            var refreshToken = req.body.refreshToken || req.query.refreshToken || req.headers["x-access-refresh-token"]
            var userData = await jwtHelper.verifyToken(refreshToken, accessTokenSign)
            const token = await jwtHelper.generateToken(userData.data, accessTokenSign, accessTokenLife)
            res.status(200).json({
                token
            })
        } catch (error) {
            res.status(500).json({
                error: err.message
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