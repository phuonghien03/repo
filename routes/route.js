module.exports = app => {
    var router = require('express').Router()
    const userController = require('../controllers/user.controller')

    router.post('/create', userController.create)

    app.use('/user', router)
}