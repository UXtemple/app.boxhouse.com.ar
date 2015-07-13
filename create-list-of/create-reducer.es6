export default function createReducer(actionTypes) {
  return function reducer(state = [], {type, value}) {
    switch (type) {
      case actionTypes.add: return add(state, value);
      case actionTypes.remove: return remove(state, value);
      default: return state;
    }
  }
}

function add(state, value) {
  return [value, ...state];
}

function remove(state, value) {
  return state.filter(v => v !== value);
}
