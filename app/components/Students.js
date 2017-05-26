'use strict';

import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  console.log(props.students)
  return (
    <div>
      You are in Students
      <section>
        {
          props.students.map(student => (
            <div key={student.id}>
              <form onSubmit={props.handleDelete} value={student.id}>
                <Link to={`/student/${student.id}`}>{student.name}</Link>
                <button type='submit'>Delete</button>
              </form>
            </div>
          ))
        }
      </section>
    </div>
  );
}
