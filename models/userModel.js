const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: [true,"Please enter your first name."]
    },
    lastname:{
        type: String,
        required: [true,"Please enter your last name."]
    },
    username:{
        type: String,
        unique: [true,"This username already exists."],
        required: [true,"Please enter a username."]
    },
    gender:{
        type: String,
        required: [true,"Please enter your gender."]
    },
    email:{
        type: String,
        required: false,
        lowercase: true,
    },
    password:{
        type: String,
        required: [true,"Please enter a password."],
        minlength: [7,"password must be atleast 7 characters."]
    }
})

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.statics.login = async function(username, password) {
    let user = await this.findOne({username})
    if(user) {
        let auth = await bcrypt.compare(password, user.password)
        if(auth) {
            return user
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect username')
}

const user = new mongoose.model('user', userSchema)

module.exports = user

 