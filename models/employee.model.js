const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullname: {type: String, required: "Fullname Is Required"},
    email: {type: String},
    mobile:  {type:String} ,
    address: {type:String},
    city: {type:String},
    state: {type:String},
    gender: {type:String},
    date: {type: Date, default: Date.now},
})
employeeSchema.path('email').validate((val)=>{

})
mongoose.model('Employee', employeeSchema);
