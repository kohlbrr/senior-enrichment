'use strict';

import axios from 'axios';
import { browserHistory } from 'react-router';

export const receiveStudents = students => ({
  type: 'RECEIVE_STUDENTS',
  students
});

export const receiveStudent = student => ({
  type: 'RECEIVE_STUDENT',
  student
});

export const addStudent = student => ({
  type: 'ADD_STUDENT',
  student
})

export const removeStudent = studentId => ({
  type: 'REMOVE_STUDENT',
  studentId
})

export const getStudentById = studentId => {
  return dispatch => {
    return axios.get(`/api/student/${studentId}`)
    .then(res => res.data)
    .then(res => {
      dispatch(receiveStudent(res));
    })
    .catch(console.error);
  }
}

export const createStudent = createObj => {
  return dispatch => {
    return axios.post('/api/student', createObj)
    .then(res => res.data)
    .then(newStudent => {
      dispatch(addStudent(newStudent));
      browserHistory.push('/students');
    })
    .catch(console.error)
  }
}

export const deleteStudent = studentId => {
  return dispatch => {
    return axios.delete(`/api/student/${studentId}`)
    .then(() => {
      dispatch(removeStudent(studentId));
      browserHistory.push('/students'); // This doesn't repopulate props
    })
    .catch(console.error);
  }
}

export const updateStudent = (studentId, updateObj) => {
  return dispatch => {
    return axios.put(`/api/student/${studentId}`, updateObj)
    .then(res => res.data)
    .then(updatedStudent => {
      dispatch(receiveStudent(updatedStudent));
    })
    .then(() => {
      return axios.get('/api/student')
    })
    .then(res => res.data)
    .then((students) => {
      dispatch(receiveStudents(students));
    })
    .catch(console.error);
  }
}
