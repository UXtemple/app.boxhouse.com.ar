import objectToArray from '../utils/object-to-array';

export function count(state, {boxId}) {
  return Object.keys(state).filter(id => state[id].boxId === boxId).length;
}

export function listForBox(state, boxId) {
  return objectToArray(state).filter(i => i.boxId === boxId);
}
