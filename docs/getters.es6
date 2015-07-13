export function count(state, {boxId}) {
  return Object.keys(state).filter(id => state[id].boxId === boxId).length;
}
