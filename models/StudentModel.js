var mongoose = require('mongoose');
var StudentSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : [true, 'Name can not be empty']
        },
        dob : Date,
        gpa : {
            type : Number,
            min : [0, 'GPA can not be negative'],
            max : 10
        },
        gender : {
            type : String,
            enum : ['Male', 'Female']
        },
        image : String
    }
);
var StudentModel = mongoose.model('student', StudentSchema, 'student');
module.exports = StudentModel;