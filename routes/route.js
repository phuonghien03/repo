const authController = require('../controllers/auth.controller')
const examController = require('../controllers/exam.controller')

module.exports = app => {
    var authRouter = require('express').Router()
    var examRouter = require('express').Router()

    const userController = require('../controllers/user.controller')

    authRouter.post('/login', userController.login)
    authRouter.post('/create', userController.create)
    authRouter.get('/getnewtoken', userController.getNewToken)
    app.use('/user', authRouter)

    examRouter.get('/', examController.get)
    examRouter.get('/:id', authController.isAuth, examController.getDetail)
    app.use('/exam', examRouter)
}