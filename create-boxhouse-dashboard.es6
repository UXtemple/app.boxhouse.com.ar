import { createRedux } from 'redux';
import { reducer as companies } from './companies';

export default function createBoxhouseApp(initialData) {
  return createRedux({
    companies
  }, initialData);
};
