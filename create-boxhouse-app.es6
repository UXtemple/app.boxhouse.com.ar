import { createRedux } from 'redux';
import { reducer as boxes } from './boxes';
import { reducer as company } from './company';
// import { reducer as docs } from './docs';

export default function createBoxhouseApp(initialData) {
  return createRedux({
    boxes,
    company
    // docs
  }, initialData);
};
