'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Student from '../components/Student';

const mapStateToProps = state => {
  console.log(state)
  return {
    selectedStudent: state.student.selectedStudent
  };
};

export default connect(mapStateToProps)(Student);
