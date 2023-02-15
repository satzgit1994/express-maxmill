const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const admindata = require('./admin')

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  console.log(admindata.products)
});

module.exports = router;
