'use strict';

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import axios from 'axios';

import store from './store';
import App from './components/App';
import CampusesContainer from './containers/campusesContainer';
import StudentsContainer from './containers/studentsContainer';
import CampusContainer from './containers/campusContainer';
import StudentContainer from './containers/studentContainer';

import { receiveCampuses, getCampusById } from './action-creators/campus';
import { receiveStudents, getStudentById } from './action-creators/student';

const onAppEnter = () => {
  const pCampuses = axios.get('/api/campus');
  const pStudents = axios.get('/api/student');

  return Promise
  .all([pCampuses, pStudents])
  .then(responses => responses.map(res => res.data))
  .then(([campuses, students]) => {
    store.dispatch(receiveCampuses(campuses));
    store.dispatch(receiveStudents(students));
  })
  .catch(console.error);
};

const onCampusEnter = (nextRouterState) => {
  const selectedCampus = nextRouterState.params.id;
  return store.dispatch(getCampusById(selectedCampus));
};

const onStudentEnter = (nextRouterState) => {
  const selectedStudent = nextRouterState.params.id;
  return store.dispatch(getStudentById(selectedStudent));
};

const Routes = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App} onEnter={onAppEnter}>
          <Route path='/campuses' component={CampusesContainer}/>
          <Route path='/campus/:id' component={CampusContainer} onEnter={onCampusEnter}/>
          <Route path='/students' component={StudentsContainer}/>
          <Route path='/student/:id' component={StudentContainer} onEnter={onStudentEnter}/>
        </Route>
      </Router>
    </Provider>
  );
}

render (
  <Routes/>,
  document.getElementById('main')
);
