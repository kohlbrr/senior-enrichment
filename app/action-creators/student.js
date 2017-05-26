'use strict';

import axios from 'axios';

export const receiveStudents = students => ({
  type: 'RECEIVE_STUDENTS',
  students
});

export const receiveStudent = student => ({
  type: 'RECEIVE_STUDENT',
  student
});

export const getStudentById = studentId => {
  return dispatch => {
    return axios.get(`/api/student/${studentId}`)
    .then(res => res.data)
    .then(res => {
      console.log(res)
      dispatch(receiveStudent(res));
    })
    .catch(console.error);
  }
}
