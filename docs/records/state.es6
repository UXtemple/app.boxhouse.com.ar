import { Record, List } from 'immutable';

export default class StateRecord extends Record({
  docs: List()
}) {};
