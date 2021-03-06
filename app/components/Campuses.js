'use strict';

import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div>
      You are in Campuses
      <form onSubmit={props.handleSubmit}>
        <fieldset>
          <legend>Add a Campus</legend>
          <h4>Name</h4>
          <input
            name='name'
            type='text'
            onChange={props.handleNameChange}
            required
          />
          <h4>Image URL</h4>
          <input
            name='imageUrl'
            type='text'
            onChange={props.handleImageChange}
          />
          <div>
            <button type='submit'>Submit</button>
          </div>
        </fieldset>
      </form>
        {
          props.campuses.map(campus => (
            <div key={campus.id}>
              <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
            </div>
          ))
        }
    </div>
  );
}
