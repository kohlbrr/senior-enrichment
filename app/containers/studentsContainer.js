'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Students from '../components/Students';

const mapStateToProps = state => {
  return {
    students: state.student.students
  };
};

export default connect(mapStateToProps)(Students);
