'use strict';

import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div>
      <h3>Add A Student</h3>
      <form onSubmit={props.handleSubmit}>
        <fieldset>
          <h4>Name</h4>
          <input
            name='name'
            type='text'
            onChange={props.handleNameChange}
            required
          />
          <h4>Email</h4>
          <input
            name='email'
            type='text'
            onChange={props.handleEmailChange}
            required
          />
          <h4>Campus</h4>
          <select
            name='campus'
            selected='selected'
            onChange={props.handleCampusChange}
            required
          >
          {
            props.campuses && props.campuses.map(campus => (
              <option key={campus.id} value={campus.id}>{campus.name}</option>
            ))
          }
          </select>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
