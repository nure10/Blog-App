const mongoose = require('mongoose');
const User = require('./user.model');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports =  mongoose.model("post", postSchema);