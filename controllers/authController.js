const User = require('../models/userModel')
const setJwt = require('../modules/setJwt')

const errorHandler = (err) => {
    let error = {
        firstname:"",
        lastname:"",
        username:"",
        gender:"",
        password:""
    }

    if(err.message === 'incorrect username') {
        error.username = 'user not registered.'
    }

    if(err.message === 'incorrect password') {
        error.password = 'password incorrect.'
    }

    if(err.message.includes('user validation failed:')) {
        Object.values(err.errors).forEach(({properties}) => {
            error[properties.path] = properties.message
        })
    }

    if(err.code == 11000) {
        error.username = "This username already exists."
    }

    return error
}

const loginGet = (req, res) => {
    res.render('login')
}

const loginPost = async(req, res) => {
    let {username, password} = req.body
    try {
        let user = await User.login(username, password)
        setJwt({username}, res)
        res.status(200).json({user})
    } catch (err) {
        let errors = errorHandler(err)
        res.status(400).json({errors})
    }
}


//signup routes
const signupGet = (req, res) => {
    res.render('signup')
}

const signupPost = async(req, res) => {
    let details = req.body
    try {
        let user = await User.create({
            firstname: details.firstname,
            lastname: details.lastname,
            username: details.username,
            gender: details.gender,
            email: details.email,
            password: details.password
        })
        setJwt({username:user.username},res)
        res.status(201).json({user} )
    } catch (err) {
        let errors = errorHandler(err)
        res.status(400).json({errors})
    }
    
}

const logout = (req, res) => {
    res.cookie('AccessToken', '', {
        maxAge: 1, 
        httpOnly: true,
    })
    res.redirect('/')
}

module.exports = {loginGet, loginPost, signupGet, signupPost, logout}