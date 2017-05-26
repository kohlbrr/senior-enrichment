'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Campus from '../components/Campus';

const mapStateToProps = state => {
  return {
    selectedCampus: state.campus.selectedCampus,
    selectedCampusStudents: state.campus.selectedCampusStudents
  };
};

export default connect(mapStateToProps)(Campus);
