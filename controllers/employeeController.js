const express = require('express');
 
const mongoose = require('mongoose');

const Employee =  mongoose.model('Employee');

var router = express.Router();

router.get('/', (req,res)=>{
    res.render('employee/addOrEdit', {
        viewTitle : "Add Employee"
    });
});

router.post('/',(req,res)=>{
    insertRecord(req,res);
})

function insertRecord(req,res){
    var employee = new Employee();
    employee.fullname = req.body.fullname;
    employee.email =  req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err, doc)=>{
        if(!err){
            res.redirect('employee/list')
        }else{
            // if(err.name == validationError){
            //     handleValidationError(err, req.body);
            //     res.render('employee/addOrEdit', {
            //         viewTitle : "Add Employee",
            //         employee: req.body ,
            //     });
            // }
            console.log('Error: ' + err)
        }        
    });
}

router.get('/list',(req,res)=>{
    res.json('From LIst');
    Employee.find((err, docs)=>{
        if(!err){
            res.render('employee/list', {
                list: docs
            })
        }else{
            console.log('Error:' +err)
        }
    })
})

// function handleValidationError(err, body){
//     for(field in err.errors){
//         switch(err.errors[field].path){
//             case 'fullName':
//                 body['fullNameError'] = err.errors[field].message;
//                 break
//             case 'email':
//                 body['emailError'] = err.errors[field].message;
//                 break
//             default:
//                 break;
//         }
//     }
// }

module.exports = router;