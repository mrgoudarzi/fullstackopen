
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 5,
        required: true
    },
    author: {
        type: String,
        minlength: 3,
        required: true
    },
    url:{
        type: String,
        minlength: 10,
        required: true
    },
    likes:{
        type: Number,
        max: 9999 
    }

})

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Blog', blogSchema)