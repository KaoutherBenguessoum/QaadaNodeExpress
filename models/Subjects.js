//import mongoose
const mongoose = require('mongoose');
//Schema 'DEscription of our model'
const Subject = mongoose.Schema({
    subject :{
        type : String,
        required : true
    },
    teacher:{
        type : String,
    }
});
//export model
module.exports = mongoose.model('Subject',Subject);