const express = require('express');
const routes = require('./routes'); //use . to search only in this folder
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('');

app.listen(3000);