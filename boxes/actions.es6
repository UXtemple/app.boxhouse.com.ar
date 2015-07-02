import * as t from './action-types';
import { v4 as uuid } from 'node-uuid';

export function add({full, position}) {
  return {
    type: t.ADD,
    full,
    id: uuid(),
    position
  }
}

export function remove(id) {
  return {
    type: t.REMOVE,
    id
  }
}

export function toggleFull(id) {
  return {
    type: t.TOGGLE_FULL,
    id
  }
}
