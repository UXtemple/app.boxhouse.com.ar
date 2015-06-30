import * as t from './action-types';

export function setName({name}) {
  return {
    type: t.SET_NAME,
    name
  }
}
