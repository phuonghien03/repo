const jwt = require("jsonwebtoken")
const user = require("../models/user")

let generateToken = (user, secretSign, tokenLife) => {
    return new Promise((resolve, reject) => {
        const userData = {
            id: user.id,
            userName: user.userName
        }

        jwt.sign({
            data: userData
        },
            secretSign
        , {
            algorithm: "HS256",
            expiresIn: tokenLife
        }, (err, token) => {
            if(err) 
                return reject(err)
            else 
                return resolve(token)
        })
    })
}

let verifyToken = (token, secretSign) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretSign, (error, decoded) => {
            if(error) {
                return reject(error)
            } else {
                return resolve(decoded)
            }
        })
    })
}

module.exports = {
    generateToken: generateToken,
    verifyToken: verifyToken
}