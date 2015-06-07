import { Record } from 'immutable';
import { v4 as uuid } from 'node-uuid';

export default class CompanyRecord extends Record({
  id: undefined,
  name: undefined,
  uri: undefined
}) {
  static from(raw) {
    if (typeof raw.id === 'undefined') {
      raw.id = uuid();
    }

    return new CompanyRecord(raw);
  }
}
