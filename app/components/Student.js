'use strict';

import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  console.log(props)
  return (
    <div>
      <div>
        { props.selectedStudent.name }
      </div>
      <div>
        <form>
          <fieldset>
            <legend>Change Campus</legend>
            <div>
              <select name='campus' required>
                {
                  props.campuses && props.campuses.map(campus => (
                    <option key={campus.id} value={campus.id}>{campus.name}</option>
                  ))
                }
              </select>
            </div>
            <div>
              <div>
                <button type='submit'>Change Campus</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
