export default function createActions(actionTypes) {
  return {
    set: (value) => ({type: actionTypes.set, value})
  }
}
