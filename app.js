require('dotenv').config();
const express      = require('express');
const mongoose     = require('mongoose');
const path         = require('path');



require('./configs/db.config');
const app = express();

require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);


const phonesRoutes = require('./routes/phones');
app.use('/api/phones', phonesRoutes);


app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
  });

app.use((req, res, next) => {
  return res.status(404).json({ message: "Not found"});
})


module.exports = app;
