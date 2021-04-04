const examController = require('../controllers/exam.controller')

module.exports = app => {
    var router = require('express').Router()
    const userController = require('../controllers/user.controller')

    router.post('/login', userController.login)
    router.post('/create', userController.create)
    router.get('/exam', examController.get)

    app.use('/user', router)
}