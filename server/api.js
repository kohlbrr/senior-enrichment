'use strict';

const api = require('express').Router();
//const db = require('../db')
const models = require('../db/models');
const Campus = models.Campus;
const Student = models.Student;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}));

api.get('/campus', (req, res, next) => { // Get all campuses
  Campus.findAll()
  .then(campuses => {
    res.send(campuses);
  })
  .catch(next);
})

api.get('/campus/:id', (req, res, next) => { // Get campus
  Campus.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(campus => {
    res.send(campus);
  })
  .catch(next);
})

api.get('/campus/:id/students', (req, res, next) => { // Get all students from a campus
  Campus.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(campus => {
    if(!campus) res.status(404).send('No students on campus');
    else return campus.getStudents();
  })
  .then(students => {
    res.send(students);
  })
  .catch(next);
})

api.post('/campus', (req, res, next) => { // Create campus
  Campus.create(req.body)
  .then(campus => {
    res.status(201).send(campus);
  })
  .catch(next);
})

api.put('/campus/:id', (req, res, next) => { // Update campus info
  console.log(req.params)
  Campus.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(campus => {
    if(!campus) res.sendStatus(404);
    else return campus.update(req.body, {
      returning: true,
      plain: true
    });
  })
  .then(campus => {
    res.send(campus);
  })
  .catch(next);
})

api.delete('/campus/:id', (req, res, next) => { // Delete campus and associated students
  Campus.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(numDeleted => {
    if(!numDeleted) res.sendStatus(404);
    else res.sendStatus(204);
  })
})

api.get('/student', (req, res, next) => { // Get all students
  Student.findAll()
  .then(students => {
    res.send(students);
  })
  .catch(next);
})

api.get('/student/:id', (req, res, next) => { // Get student
  Student.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(student => {
    res.send(student);
  })
  .catch(next);
})

api.post('/student', (req, res, next) => { // Create student
  Campus.findOne({
    where: {
      id: req.body._campus
    }
  })
  .then(campus => {
    if(!campus) res.status(404).send('Campus not found');
    else return campus.createStudent(req.body)
  })
  .then(student => {
    res.status(201).send(student);
  })
  .catch(next);
})

api.put('/student/:id', (req, res, next) => { // Update student
  Student.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(student => {
    if(!student) res.sendStatus(404);
    else return student.update(req.body, {
      returning: true,
      plain: true
    });
  })
  .then(student => {
    res.send(student);
  })
  .catch(next);

})

api.delete('/student/:id', (req, res, next) => { // Delete student
  Student.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(numDeleted => {
    if(!numDeleted) res.sendStatus(404);
    else res.sendStatus(204);
  })
})

module.exports = api;
