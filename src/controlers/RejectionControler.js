const Booking = require('../models/Booking');


module.exports = {
    async store(req, res) {
        const { booking_id } = req.params;
        const booking = await Booking.findById(booking_id).populate('spot');

        booking.approved = false;

        await booking.save();


        const bUserSocket = req.connectedUsers[booking.user];

        if (bUserSocket) {
            console.log(booking);
            req.io.to(bUserSocket).emit('bookingResponse', booking);
        }

        return res.json(booking);
    }
}