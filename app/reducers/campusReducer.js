'use strict';

const initialCampusState = {
  selectedCampus: {},
  campuses: []
};

export default (state = initialCampusState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'RECEIVE_CAMPUSES':
      newState.campuses = action.campuses;
      break;
    case 'RECEIVE_CAMPUS':
      break;
    case 'RECEIVE_CAMPUS_STUDENTS':
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
