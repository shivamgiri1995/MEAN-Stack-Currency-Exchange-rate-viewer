const config = require('../config.json');
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ', err) }
});



module.exports = require('../Currency/currency.model');

