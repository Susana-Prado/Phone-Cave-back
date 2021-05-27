require('dotenv').config();
const mongoose = require('mongoose');

const express      = require('express');
const path         = require('path');
const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup     

app.use(express.static(path.join(__dirname, 'public')));



// default value for title local
app.locals.title = 'Phone Cave';



const index = require('./routes/index');
app.use('/', index);


module.exports = app;
