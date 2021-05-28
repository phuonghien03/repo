module.exports = {
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b5c3190f1c32d6',
    password: '714817aa',
    db: 'heroku_7fe6c50a6398fee',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}