import { ADD, REMOVE, TOGGLE_FULL } from './action-types';
import i from 'seamless-immutable';

export default function contexts(state = i({}), {type, ...payload}) {
  switch (type) {
    case ADD: return add(state, payload);
    case REMOVE: return remove(state, payload);
    case TOGGLE_FULL: return toggleFull(state, payload);
    default: return state;
  }
}

// position = {
//   shelf: undefined,
//   rack:  undefined,
//   height: undefined,
//   position: undefined,
//   depth: undefined
// }
function add(state, {full=false, id, position}) {
  return state.merge({[id]: {full, id, position}});
}

function remove(state, {id}) {
  const { [id]: box, ...rest } = state;
  return rest;
}

function toggleFull(state, {id}) {
  const { [id]: box, ...rest } = state;
  return {
    [id]: {
      ...box,
      full: !box.full
    },
    ...rest
  };
}
