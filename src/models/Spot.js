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
}, {
        timestamps: true,
        toJSON: {
            virtuals: true,
        } // when requestig a virtual it should convert to JSON
    });

SpotScheme.virtual('thumbnail_url').get(function () {
    return `http://localhost:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot', SpotScheme);