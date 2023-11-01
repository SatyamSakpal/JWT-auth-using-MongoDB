const jwt = require('jsonwebtoken')

const verifyUser = async(req, res, next) => {
    let token = req.cookies.AccessToken
    if(token) {
        jwt.verify(token, process.env.SECRECT_ACCESS_KEY, (err, user)=> {
            if(user) {
                res.locals.loginStatus = user
                next()
            }else {
                res.locals.loginStatus = null
                res.redirect('/login')
            }
        })
    }
}

module.exports = verifyUser