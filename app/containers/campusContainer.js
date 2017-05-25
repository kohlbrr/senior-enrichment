'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Campus from '../components/App';

const mapStateToProps = state => {
  return {
    campuses: state.campus.campuses
  };
};

export default connect(mapStateToProps)(Campus);
