'use strict';

import axios from 'axios';
import { browserHistory } from 'react-router';

export const receiveCampuses = campuses => ({
  type: 'RECEIVE_CAMPUSES',
  campuses
});

export const receiveCampus = campus => ({
  type: 'RECEIVE_CAMPUS',
  campus
});

export const receiveCampusStudents = students => ({
  type: 'RECEIVE_CAMPUS_STUDENTS',
  students
});

export const addCampus = campus => ({
  type: 'ADD_CAMPUS',
  campus
});

export const removeCampus = campusId => ({
  type: 'REMOVE_CAMPUS',
  campusId
});

export const getCampusById = campusId => {
  return dispatch => {
    return axios.get(`/api/campus/${campusId}`)
    .then(res => res.data)
    .then(res => {
      console.log(res)
      dispatch(receiveCampus(res));
    })
    .catch(console.error);
  }
};

export const getCampusStudents = campusId => {
  return dispatch => {
    return axios.get(`/api/campus/${campusId}/students`)
    .then(res => res.data)
    .then(res => {
      console.log(res)
      dispatch(receiveCampusStudents(res));
    })
    .catch(console.error);
  }
};

export const createCampus = createObj => {
  return dispatch => {
    return axios.post('/api/campus', createObj)
    .then(res => res.data)
    .then(campus => {
      dispatch(addCampus(campus))
    })
  }
};

export const deleteCampus = campusId => {
  return dispatch => {
    return axios.delete(`/api/campus/${campusId}`)
    .then(() => {
      dispatch(removeCampus(campusId));
      browserHistory.push('/campuses') // Thsi route never gets hit
    })
    .catch(console.error);
  }
};
