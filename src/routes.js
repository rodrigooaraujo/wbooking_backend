const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const sessionControler = require('./controlers/SessionControler');
const spotControler = require('./controlers/SpotControler');
const dashboardControler = require('./controlers/DashboardControler');
const bookingControler = require('./controlers/BookingControler');
const approvalControler = require('./controlers/ApprovalControler');
const rejectionControler = require('./controlers/RejectionControler');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', sessionControler.store);

routes.post('/spots', upload.single('thumbnail'), spotControler.store);
routes.get('/spots', spotControler.index);
routes.post('/spots/:spot_id/bookings', bookingControler.store);

routes.get('/dashboard', dashboardControler.show);
routes.post('/bookings/:booking_id/approvals', approvalControler.store);
routes.post('/bookings/:booking_id/rejections', rejectionControler.store);

module.exports = routes;