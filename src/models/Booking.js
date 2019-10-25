const mongoose = require('mongoose');

const BookingScheme = new mongoose.Schema({
    date: String,
    approved: Boolean, //null if haven't seem
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
}, {
        timestamps: true
    });

module.exports = mongoose.model('Booking', BookingScheme);