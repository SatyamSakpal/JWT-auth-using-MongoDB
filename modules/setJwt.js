const jwt = require('jsonwebtoken')

const setJwt = (payload, res) => {
    let token = jwt.sign(payload, process.env.SECRECT_ACCESS_KEY)
    res.cookie('AccessToken', token, {
        maxAge: 2 * 24 * 60 * 60 * 1000, 
        httpOnly: true,
    })

} 

module.exports = setJwt