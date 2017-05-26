'use strict';

import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  console.log(props)
  return (
    <div>
      { props.selectedStudent.name }
    </div>
  );
}
