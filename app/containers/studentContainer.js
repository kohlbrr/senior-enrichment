'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Student from '../components/Student';
import { updateStudent } from '../action-creators/student'
import store from '../store';

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

/*
 *
 *  Dear Future Rich,
 *
 *    Hope you are doing well. I just wanted to remind me to
 *  set the default value of `campusId` to the first element of
 *  campuses. Or - I could make the initial value a non-functioning
 *  label.
 *
 *    Remember to not be a jerk.
 *
 *  Love,
 *
 *    ~ Me
 *
 */

class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campusId: 1
    };
    console.log(this.props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      campusId: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.selectedStudent);
    console.log(this.state);
    store.dispatch(updateStudent(this.props.selectedStudent.id, this.state));
  }

  render() {
    return (
      <Student
        {...this.props}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
