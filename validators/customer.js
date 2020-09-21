const { check } = require('express-validator');

exports.customerValidator = [
    check('firstName')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('address')
        .not()
        .isEmpty()
        .withMessage('Please enter an address'),
    check('city')
         .not()
         .isEmpty()
         .withMessage('A city name is require'),
    
];
