'use strict';

import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div>
      You are in Campuses
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
