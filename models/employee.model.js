const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullname: {type: String, required: "Fullname Is Required"},
    email: {type: String},
    mobile:  {type:String} ,
    city: {type:String},
})
employeeSchema.path('email').validate((val)=>{

})
mongoose.model('Employee', employeeSchema);
