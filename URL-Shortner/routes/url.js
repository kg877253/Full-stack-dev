const express = require('express');
const { gennewshorturl, getanalytics, gotoshorturl } = require('../controller/url');

const URL = require('../models/url');
const router = express.Router();

//Route to generate a new short URL
router.post('/url', gennewshorturl);

//Route to redirect to the original URL
router.get('/:shortId', gotoshorturl);

//Route to get analytics for a short URL
router.get('/analytics/:shortId', getanalytics);

module.exports = router;