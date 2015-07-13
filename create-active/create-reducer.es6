export default function createReducer(actionTypes) {
  return function reducer(state, {type, value}) {
    switch (type) {
      case actionTypes.set: return value;
      default: return state;
    }
  }
}
