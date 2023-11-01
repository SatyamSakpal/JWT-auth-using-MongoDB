const verifyUser = require('./middleware/verifyUser')
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use(express.static('./views'))
app.set('view engine', 'ejs')
require('dotenv').config()
app.use(cookieParser())
app.use(express.json())

app.use(authRoutes)

app.get('/', (req, res) => {
    res.render('unprotected') 
})
 
app.get('/protected', verifyUser, (req, res) => {
    res.send('NOW YOU HAVE ACCESS TO PROTECTED CONTENT')
})

mongoose.connect(process.env.DBURL)
    .then(()=> {
        app.listen(process.env.PORT || 3000)
    })
    .catch((err)=> {
        console.log(err)
    })
