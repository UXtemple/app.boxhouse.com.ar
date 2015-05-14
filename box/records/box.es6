import PositionRecord from './position';
import { Record } from 'immutable';

export default class BoxRecord extends Record({
  id: undefined,
  documentCount: undefined,
  position: new PositionRecord(),
  full: false,
  companyId: undefined
}) {};

// TODO constructor create PositionRecord if not there
