'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Campuses from '../components/Campuses';

const mapStateToProps = state => {
  return {
    campuses: state.campus.campuses
  };
};

export default connect(mapStateToProps)(Campuses);
