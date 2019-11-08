const express = require('express');
const routes = require('./routes'); //use . to search only in this folder
const mongoose = require('mongoose');

const socketio = require('socket.io');
const http = require('http');

const cors = require('cors');
const path = require('path');

const app = express();
const server = http.Server(app);
const io = socketio(server);



mongoose.connect('mongodb+srv://rodrigo:57613665@cluster0-iy20l.mongodb.net/oministack?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

//Best approach is to save that on Db - regis
const connectedUsers = {};

io.on('connection', socket => {
    connectedUsers[socket.handshake.query.user_id] = socket.id;

    // setTimeout(() => {
    //     socket.emit('hello', 'World');
    // }, 2000);
});

//It will be gobal for all requests
//next must to be called in order to continue the 
app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors()); //{origin: ''}
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333); //app