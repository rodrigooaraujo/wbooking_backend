const express = require('express');
const routes = require('./routes'); //use . to search only in this folder
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors()); //{origin: ''}
app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

mongoose.connect('');

app.listen(3333);