const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String
    },
    user: {
        ref: 'users',
        type: Schema.ObjectID
    }
})

module.exports = mongoose.model('categories', categorySchema)