'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Campuses from '../components/Campuses';

const mapStateToProps = state => {
  return {
    campuses: state.campus.campuses
  };
};

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
  
  }

  handleImageChange(e) {
  
  }

  handleSubmit(e) {
  
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

export default connect(mapStateToProps)(CampusesContainer);
