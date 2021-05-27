const express = require('express');
const router  = express.Router();
const Phone = require('../models/Phone.model');
const data = require('../phones.json');

router.get('/', (req, res, next) => {
    Phone.find()
    .then((phones) => res.status(200).json(phones))
    .catch((err) => res.status(500).json(err));
})

module.exports = router;


