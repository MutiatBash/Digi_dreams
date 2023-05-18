const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    video:{
        type: String
    },
    channel:{
        type: String
    },
    song:{
        type: String
    },
    likes:{
        type: Number,
        default: 0
    },
    messages:{
        type: Number,
        default: 0
    },
    description:{
        type: String
    },
    shares:{
        type: Number,
        default: 0
    },
    
}, {timestamps: true})


module.exports = mongoose.model('Video', postSchema)