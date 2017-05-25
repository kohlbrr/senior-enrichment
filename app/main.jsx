'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import axios from 'axios';

import store from './store'
import Root from './components/Root'
import CampusContainer from './containers/campusContainer'

import { receiveCampuses } from './action-creators/campus';
import { receiveStudents } from './action-creators/student';

const onAppEnter = () => {
  const pCampuses = axios.get('/api/campus');
  const pStudents = axios.get('/api/student');

  return Promise
  .all([pCampuses, pStudents])
  .then(responses => responses.map(res => res.data))
  .then(([campuses, students]) => {
    store.dispatch(receiveCampuses(campuses));
    store.dispatch(receiveStudents(students));
  });
};

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={CampusContainer} onEnter={onAppEnter}/>
    </Router>
  </Provider>,
  document.getElementById('main')
)
