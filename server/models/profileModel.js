const mongoose = require('mongoose')

const Schema = mongoose.Schema

const profileSchema = new Schema({
    img:{
        type: String
    },
    userName:{
        type: String,
        required:true
    },
    twitter_userName:{
        type: String,
        required: true
    },
    information:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    } 
})


module.exports = mongoose.model('Profile', profileSchema)