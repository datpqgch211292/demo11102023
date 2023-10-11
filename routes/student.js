var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();


// localhost:3001/student
router.get('/', async(req, res) => {
    var students = await StudentModel.find();
    //res.send(students)
    //render ra file view: view/student/index.hbs 
    res.render('student/index', {students : students});
})

router.get('/detail/:id', async(req, res) => {
    var id = req.params.id;
    var student = await StudentModel.findById(id);
    res.render('student/detail', {student : student});
})

router.get('/delete/:id', async(req, res) => {
    var id = req.params.id;
    await StudentModel.findByIdAndDelete(id);
    console.log('Delete student succeed');
    res.redirect('/student');

})

router.get('/add', (req, res) => {
    res.render('student/add');
})

router.post('/add', async(req, res) => {
    var student = req.body;
    await StudentModel.create(student);
    console.log('Add student success');
    res.redirect('/student');
})

router.get('/edit/:id', async(req, res) => {
    var id = req.params.id;
    var student = await StudentModel.findById(id);
    res.render('student/edit', { student: student});
})

router.post('/edit/:id', async(req, res) => {
    var id = req.params.id;
    var student = req.body;
    await StudentModel.findByIdAndUpdate(id, student);
    console.log('Update student success');
    res.redirect('/student');

})

module.exports = router;