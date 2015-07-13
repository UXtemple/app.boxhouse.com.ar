export default function createActions(actionTypes) {
  return {
    add: (value) => ({type: actionTypes.add, value}),
    remove: (value) => ({type: actionTypes.remove, value})
  }
}
