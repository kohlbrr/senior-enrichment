'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Campuses from '../components/Campuses';
import { createCampus } from '../action-creators/campus'

const mapStateToProps = state => {
  return {
    campuses: state.campus.campuses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createCampus (createObj) {
      dispatch(createCampus(createObj))
    }
  }
}

class CampusesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleImageChange(e) {
    this.setState({
      image: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.createCampus)
    this.props.createCampus(this.state)
  }

  render() {
    return (
      <Campuses
        {...this.props}
        handleNameChange={this.handleNameChange}
        handleImageChange={this.handleImageChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusesContainer);
