module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        content: Sequelize.STRING,
        image: Sequelize.STRING,
        otherFile: Sequelize.STRING,
        type: Sequelize.INTEGER,
        examId: Sequelize.INTEGER
    })
    return Question
}