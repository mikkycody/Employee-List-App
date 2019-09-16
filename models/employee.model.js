const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    Fullname: String,
    Email: String,
    Mobile:  String ,
    City: String,
})

const Course =  mongoose.model('Employee', employeeSchema);
