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
    case 'ADD_CAMPUS':
      newState.campuses.push(action.campus);
      break;
    case 'REMOVE_CAMPUS':
      newState.campuses = state.campuses.filter(campus => {
        return campus.id !== action.campusId
      })
      break;
    default:
      return state;
  }
  return newState;
}
