import createActionTypes from './create-action-types';
import createActions from './create-actions';
import createReducer from './create-reducer';
import invariant from 'invariant';

export default function createActive(stuff) {
  invariant(stuff, 'we need to know what kind of stuff is active');

  const actionTypes = createActionTypes(stuff);

  return {
    actionTypes,
    actions: createActions(actionTypes),
    reducer: createReducer(actionTypes),
  }
}
