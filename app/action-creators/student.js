'use strict';

import axios from 'axios';

export const receiveStudents = students => ({
  type: 'RECEIVE_STUDENTS',
  students
});
