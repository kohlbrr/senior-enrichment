'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Campus from '../components/Campus';
import { deleteCampus } from '../action-creators/campus'

const mapStateToProps = state => {
  return {
    selectedCampus: state.campus.selectedCampus,
    selectedCampusStudents: state.campus.selectedCampusStudents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCampus (campusId) {
      dispatch(deleteCampus(campusId))
    }
  }
}

class CampusContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.deleteCampus(this.props.selectedCampus.id)
  }

  render() {
    return (
      <Campus
        {...this.props}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusContainer);
