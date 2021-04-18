const db = require('../models')
const answer = require('../models/answer')
const Exam = db.exam
const Question = db.question
const Answer = db.answer

module.exports = {
    get: async (req, res) => {
        try {
            var exams = await Exam.findAll()
            res.json(exams)
        } catch (error) {
            res.status(500).send({
                message: "Unhandled error"
            })
        }
    },
    getDetail: async (req, res) => {
        try {
            const { id } = req.params

            var exam = await Exam.findOne({ where: {id: id}, include: {
                model: Question, 
                include: {
                    model: Answer,
                    attributes: {
                        exclude: ['isRight']
                    }
                }
            }})
            res.json(exam)
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }
}