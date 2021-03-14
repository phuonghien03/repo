const db = require('../models')
const User = db.user

module.exports = {
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