const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    email: String,
    name: String
}, {
        timestamps: true
    });

module.exports = mongoose.model('User', UserScheme);