'use strict';

import axios from 'axios';

export const receiveCampuses = campuses => ({
  type: 'RECEIVE_CAMPUSES',
  campuses
});
