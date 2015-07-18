import { createRedux } from 'redux';
import { reducer as boxes } from './boxes';
import { reducer as companies } from './companies';
import { reducer as docs } from './docs';

export default function createBoxhouseApp(initialData) {
  return createRedux({
    boxes,
    companies,
    docs
  }, initialData);
};
