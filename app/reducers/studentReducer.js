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
      newState.selectedStudent = action.student;
      break;
    case 'ADD_STUDENT':
      newState.students.push(action.student);
      break;
    case 'REMOVE_STUDENT':
      newState.students = state.students.filter(student => {
        return student.id !== action.studentId
      })
      break;
    default:
      return state;
  }
  return newState;
}
