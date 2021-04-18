const jwtHelper = require("../helpers/jwt.helper")

const accessTokenSign = process.env.ACCESS_TOKEN_SECRET || "phuonghien"

let isAuth = async (req, res, next) => {
    const tokenFromClient = req.body.token || req.query.token || req.headers["x-access-token"]

    if (tokenFromClient != null && tokenFromClient != undefined) {
        try {
            const decoded = await jwtHelper.verifyToken(tokenFromClient, accessTokenSign)

            req.jwtDecoded = decoded
            next()
        } catch (error) {
            return res.status(401).send({
                message: "Unauthorized"
            })
        }
    } else {
        return res.status(403).send({
            message: "No token provided"
        })
    }
}

module.exports = {
    isAuth: isAuth
}