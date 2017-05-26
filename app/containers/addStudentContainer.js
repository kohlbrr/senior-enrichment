'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddStudent from '../components/AddStudent';
import { createStudent } from '../action-creators/student'

const mapStateToProps = state => {
  return {
    campuses: state.campus.campuses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createStudent (createObj) {
      dispatch(createStudent(createObj))
    }
  };
};

class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      _campusId: 1
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleCampusChange(e) {
    this.setState({
      campusId: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createStudent(this.state);
  }

  render() {
    return (
      <AddStudent
        {...this.props}
        handleNameChange={this.handleNameChange}
        handleEmailChange={this.handleEmailChange}
        handleCampusChange={this.handleCampusChange}
        handleSubmit={this.handleSubmit}
      />
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
