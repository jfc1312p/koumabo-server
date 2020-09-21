const mongoose = require('mongoose');
const crypto = require('crypto');


// user schema
const customerScheama = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        lastName: {
            type: String,
            trim: true,
             max: 32
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: [true, 'Email is already taken!'],
            lowercase: true
        },
        address: {
            type: String,
            trim:true,
            required: [true, 'Please add an address']
          },
        city:{
            type:String,
            trim:true,
            required: [true, 'Please enter the city name']
        },

        department: {
            type: String,
            trim:true
            
        },

      
        phone: {
          type: String,
          maxlength: [20, 'Phone number can not be longer than 20 characters']
        },
        
        
        

    },
    { timestamps: true }
);



module.exports = mongoose.model('Customer', customerScheama);


