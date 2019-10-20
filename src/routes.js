const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const sessionControler = require('./controlers/SessionControler');
const spotControler = require('./controlers/SpotControler');
const dashboardControler = require('./controlers/DashboardControler');
const bookingControler = require('./controlers/BookingControler');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', sessionControler.store);

routes.post('/spots', upload.single('thumbnail'), spotControler.store);
routes.get('/spots', spotControler.index);

routes.get('/dashboard', dashboardControler.show);

routes.post('/spots/:spot_id/bookings', bookingControler.store);

module.exports = routes;