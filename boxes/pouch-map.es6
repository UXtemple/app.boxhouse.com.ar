import * as t from './action-types';
import { OPERATIONS as o } from '../pouchify';

export default {
  [t.ADD]: o.CREATE,
  [t.REMOVE]: o.DELETE,
  [t.TOGGLE_ALL]: o.UPDATE
};
