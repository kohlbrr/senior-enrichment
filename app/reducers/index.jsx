import { combineReducers } from 'redux'
import campusReducer from './campusReducer';
import studentReducer from './studentReducer';

export default combineReducers({
  campus: campusReducer,
  student: studentReducer
});

/*
const initialState = {}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

export default rootReducer
*/
