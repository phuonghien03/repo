const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('../models/user')(sequelize, Sequelize)
db.exam = require('../models/exam')(sequelize, Sequelize)
db.answer = require('../models/answer')(sequelize, Sequelize)
db.question = require('../models/question')(sequelize, Sequelize)

db.exam.hasMany(db.question)
db.question.belongsTo(db.exam, {
    foreignKey: 'examId',
    as: 'exam'
})

db.question.hasMany(db.answer)
db.answer.belongsTo(db.question, {
    foreignKey: 'questionId',
    as: 'question'
})

module.exports = db