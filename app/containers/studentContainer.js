'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Student from '../components/Student';
import { updateStudent } from '../action-creators/student'

const mapStateToProps = state => {
  return {
    selectedStudent: state.student.selectedStudent,
    campuses: state.campus.campuses
  };
};

const mapDispatchToProps = dispatch => {
  //put for a student
  return {
    updateStudent (studentId, updateObj) {
      dispatch(updateStudent(studentId, updateObj))
    }
  }
};

export default connect(mapStateToProps)(Student);
