const db = require('../models')
const Exam = db.exam

module.exports = {
    get: async (req, res) => {
        var exams = await Exam.findAll()
        res.json(exams)
    }
}