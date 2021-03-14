const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

const db = require('./models')
db.sequelize.sync({force: false})


var router = require('./routes/route')
router(app)

app.listen(port)