'use strict';

import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  console.log(props)
  return (
    <div>
      { props.selectedCampus.name }
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
