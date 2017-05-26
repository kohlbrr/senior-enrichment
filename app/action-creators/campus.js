'use strict';

import axios from 'axios';

export const receiveCampuses = campuses => ({
  type: 'RECEIVE_CAMPUSES',
  campuses
});

export const receiveCampus = campus => ({
  type: 'RECEIVE_CAMPUS',
  campus
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
}
