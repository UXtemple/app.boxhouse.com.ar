import * as t from './action-types';
import { v4 as uuid } from 'node-uuid';

export function add({boxId, category, companyId, date, number, office, type}) {
  return {
    type: t.ADD,
    boxId,
    category,
    companyId,
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
