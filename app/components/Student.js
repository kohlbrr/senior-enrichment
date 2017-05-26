'use strict';

import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div>
      <div>
        { props.selectedStudent.name }
      </div>
      <div>
        { props.selectedStudent.email }
      </div>
      <div>
        <form onSubmit={props.handleSubmit}>
          <fieldset>
            <legend>Edit User</legend>
             <div>
              <h4>New Name</h4>
            </div>
            <div>
              <input 
                name='name'
                type='text'
                onChange={props.handleNameChange}
              />
            </div>
              <h4>New Email</h4>
            <div>
            <div>
              <input
                name='email'
                type='text'
                onChange={props.handleEmailChange}
              />
            </div>
            </div>
            <div>
              <h4>Campus</h4>
            </div>
            <div>
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
            </div>
            <div>
              <div>
                <button type='submit'>Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
        <form onSubmit={props.handleDelete}>
          <div>
            <button type='submit'>Delete {props.selectedStudent.name}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
