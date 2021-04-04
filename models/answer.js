module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answer", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        isRight: Sequelize.BOOLEAN,
        content: Sequelize.STRING,
        questionId: Sequelize.INTEGER
    })
    return Answer
}