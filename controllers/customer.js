const Customer = require('../models/customer');


exports.add = (req, res) => {
    console.log(req.body)
    const { firstName, lastName,email,address,city, department,phone } = req.body

    const customer = new Customer({ firstName, lastName,email,address,city, department,phone });
    Customer.findOne({ email }).exec((err, customer) => {
        if (err || customer) {
            return res.status(400).json({
                error: 'A customer with this email already exist in the database. Please try again with another email'
            });
        }
    })

    customer.save((err, customer) => {
        if (err) {
            console.log('SAVE A NEW CUSTOMER ERROR', err);
            return res.status(401).json({
                error: 'Error saving the customer in database. Please try again'
            });
        }
        return res.json({
            customer, 
            message: 'Success saving the new customer. Add another one.'
        });
    });
};
