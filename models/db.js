const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/EmployeeDB', {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to mongodb'))
.catch(err => console.error('Could not connect to mongodb', err))

require('./employee.model');

