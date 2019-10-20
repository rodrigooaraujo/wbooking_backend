const Spots = require('../models/Spot');

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;
        console.log(user_id);
        const spots = await Spots.find({ user: user_id });

        res.json(spots);
    }
}