'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div>
      <section>
        <h4>
          <Link to='/campuses'>CAMPUSES</Link>
        </h4>
      </section>
      <section>
        <h4>
          <Link to='/students'>STUDENTS</Link>
        </h4>
      </section>
      { props.children }
    </div>
  );
}
