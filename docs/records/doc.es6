import { Record } from 'immutable';
import { v4 as uuid } from 'node-uuid';

export default class DocRecord extends Record({
  id: undefined,
  type: undefined,
  date: {
    from: undefined,
    to: undefined,
  },
  number: {
    from: undefined,
    to: undefined
  },
  boxId: undefined,
  companyId: undefined,
  office: undefined
}) {
  static from(raw) {
    if (typeof raw.id === 'undefined') {
      raw.id = uuid();
    }

    return new DocRecord(raw);
  }
}
