const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    positions: [
        {
            name: {
                type: String,
                required: true
            },
            cost: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    user: {
        ref: 'users',
        type: Schema.ObjectId
    }
});

module.exports = mongoose.Model('orders', orderSchema);