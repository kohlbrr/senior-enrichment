'use strict';

const initialCampusState = {
  selectedCampus: {},
  selectedCampusStudents: [],
  campuses: []
};

export default (state = initialCampusState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'RECEIVE_CAMPUSES':
      newState.campuses = action.campuses;
      break;
    case 'RECEIVE_CAMPUS':
      newState.selectedCampus = action.campus;
      break;
    case 'RECEIVE_CAMPUS_STUDENTS':
      newState.selectedCampusStudents = action.students;
      break;
    case 'CREATE_CAMPUS':
      break;
    case 'UPDATE_CAMPUS':
      break;
    case 'DELETE_CAMPUS':
      break;
    default:
      return state;
  }
  return newState;
}
