const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    email: String,
    name: String
});

module.exports = mongoose.model('User', UserScheme);