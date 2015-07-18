import * as t from './action-types';
import { v4 as uuid } from 'node-uuid';

export function add({boxId, category, date={from: '1m ago', to: 'today'}, number={from: 1, to: 100}, office, type}={}) {
  return {
    type: t.ADD,
    boxId,
    category,
    date,
    id: uuid(),
    number,
    office
  }
}

export function remove(id) {
  return {
    type: t.REMOVE,
    id
  }
}
