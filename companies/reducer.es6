import { ADD, REMOVE } from './action-types';
import i from 'seamless-immutable';

export default function docsReducer(state = i({}), {type, ...payload}) {
  switch (type) {
    case ADD: return add(state, payload);
    case REMOVE: return remove(state, payload);
    default: return state;
  }
}

function add(state, {id, name, uri}) {
  return state.merge({[id]: {id, name, uri}});
}

function remove(state, {id}) {
  const { [id]: box, ...rest } = state;
  return rest;
}
