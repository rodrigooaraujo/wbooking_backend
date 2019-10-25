const Spot = require('../models/Spot');
const User = require('../models/User');
const mongodb = require('mongodb');

module.exports = {

    async index(req, res) {
        const { tech } = req.query;
        let spots = await Spot.find({ techs: tech });

        var ordered = spots.sort((a, b) => {

            const valA = new Date(a.createdAt).getTime();
            const valB = new Date(b.createdAt).getTime();

            if (valA > valB) {
                return -1;
            }
            if (valA < valB) {
                return 1;
            }

            return 0;

        })

        return res.json(ordered);
    },
    async store(req, res) {

        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;
        const objectid = mongodb.ObjectID;

        if (!objectid.isValid(user_id)) {
            return res.status(400).json({ success: false, message: "Invalid User" });
        }

        const user = await User.findById(user_id);

        console.log(user);

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid User" });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            price,
            techs: techs.split(',').map(tech => tech.trim()),
        });

        return res.json(spot);
    }
}