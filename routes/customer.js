const express = require('express');
const router = express.Router();

// import controller
const { add } = require('../controllers/customer');

// import validators
const { customerValidator } = require('../validators/customer');
const { runValidation } = require('../validators');

router.post('/addcustomer',customerValidator, runValidation,add);


module.exports = router;
