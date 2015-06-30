import { Record } from 'immutable';
import { v4 as uuid } from 'node-uuid';
import PositionRecord from './position';

export default class BoxRecord extends Record({
  id: undefined,
  documentCount: undefined,
  position: undefined,
  full: false,
  companyId: undefined
}) {
  static from(raw) {
    if (typeof raw.id === 'undefined') {
      raw.id = uuid();
    }

    raw.position = PositionRecord.from(raw.position);

    return new BoxRecord(raw);
  }
}
