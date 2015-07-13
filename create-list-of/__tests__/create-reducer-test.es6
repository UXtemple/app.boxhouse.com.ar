import assert from 'assert';
import createReducer from '../create-reducer';
import eq from 'lodash/lang/eq';

const actionTypes = {
  add: 'ADD',
  remove: 'REMOVE'
};
const value = 'VALUE';
const value2 = 'VALUE2';

const reducer = createReducer(actionTypes);

describe('createReducer', () => {
  it('is a function', () => assert(typeof reducer === 'function'));

  it('handles ADD', () => {
    assert(eq(reducer([], {type: actionTypes.add, value}), [value]), 'adds');
    assert(eq(reducer([value], {type: actionTypes.add, value: value2}), [value2, value]), 'adds first');
  });

  it('handles REMOVE', () => {
    assert(eq(reducer([value], {type: actionTypes.remove, value}), []), 'removes');
    assert(eq(reducer([value, value2], {type: actionTypes.remove, value}), [value2]), 'removes first');
  });
});
