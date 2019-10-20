const mongoose = require('mongoose');


const SpotScheme = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'//Module
    }
});

module.exports = mongoose.model('Spot', SpotScheme);