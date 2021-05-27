const mongoose = require('mongoose');
const Phone = require('../models/Phone.model');
const data = require('../phones.json');

mongoose
  .connect(`${process.env.DBURL}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return x.connection.dropDatabase();
  })
  .then(() => {
      Phone.insertMany(data)
      .then((data) => {
        console.log(`${data.length} inserted.`);
        mongoose.disconnect().then(() => console.log("Disconnected succesfully"));
      })
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  module.exports = mongoose;