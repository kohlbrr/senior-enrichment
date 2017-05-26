'use strict';

const initialStudentState = {
  selectedStudent: {},
  students: []
};

export default (state = initialStudentState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'RECEIVE_STUDENTS':
      newState.students = action.students;
      break;
    case 'RECEIVE_STUDENT':
      console.log(action.student)
      newState.selectedStudent = action.student;
      break;
    case 'CREATE_STUDENT':
      break;
    case 'UPDATE_STUDENT':
      break;
    case 'DELETE_STUDENT':
      break;
    default:
      return state;
  }
  return newState;
}
