//index, show, store, update, destroy.

const User = require('../models/User');

module.exports = {
    async store(req, res) {

 console.log('OK');

        const { email, name } = req.body;
        let user = await User.findOne({ email: email });

        if (!user) {
            user = await User.create({ email, name });
        }

        return res.json(user);
    }
};