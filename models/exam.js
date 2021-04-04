module.exports = (sequelize, Sequelize) => {
    const Exam = sequelize.define("exam", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.STRING,
        time: Sequelize.STRING,
        description: Sequelize.STRING

    })
    return Exam
}