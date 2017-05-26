'use strict';

import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  console.log(props.students)
  return (
    <div>
      You are in Students
      <fieldset>
        <legend>Add a Student</legend>
        <Link to='/student/add'>+ Student</Link>
      </fieldset>
      <section>
        {
          props.students.map(student => (
            <div key={student.id}>
              <form onSubmit={props.handleDelete}>
                <Link to={`/student/${student.id}`}>{student.name}</Link>
                <button name='delete' type='submit' value={student.id}>Delete</button>
              </form>
            </div>
          ))
        }
      </section>
    </div>
  );
}
