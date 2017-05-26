'use strict';

import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  console.log(props)
  return (
    <div>
      <h2>{ props.selectedCampus.name }</h2>
      <form onSubmit={props.handleSubmit}>
        <fieldset>
          <div>
            <button type='submit'>Delete {props.selectedCampus.name}</button>
          </div>
        </fieldset>
      </form>
        {
          props.selectedCampusStudents.map(student => (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>{student.name}</Link>
            </div>
          ))
        }
    </div>
  );
}
