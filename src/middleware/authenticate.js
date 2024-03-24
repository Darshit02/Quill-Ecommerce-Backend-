const jwtProvider = require("../config/jwtProvider.js")
const userService = require("../services/user.service.js")
const authanticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        //if not a token so return 401
        if(!token){
            return res.status(404).send({error: "You are not authorized (token)"})
        }
        const userId = jwtProvider.getUserIdFromToken(token)
        const user = await userService.findUserById(userId)
        req.user = user
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
    next()
}

module.exports = authanticate;