'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Students from '../components/Students';
import { deleteStudent } from '../action-creators/student'

const mapStateToProps = state => {
  return {
    students: state.student.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteStudent (studentId) {
      dispatch(deleteStudent(studentId))
    }
  }
};

class StudentsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    console.log(e.target)
    this.props.deleteStudent(e.target.value);
  }

  render() {
    return (
      <Students
        {...this.props}
        handleDelete={this.handleDelete}
      />
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsContainer);
