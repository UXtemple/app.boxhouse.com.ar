// TODO
// import DateRangeRecord, NumberRangeRecord.
// Both will extend from RangeRecord
import { Record } from 'immutable';

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
}) {};
