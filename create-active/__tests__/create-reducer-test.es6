import assert from 'assert';
import createReducer from '../create-reducer';

const actionTypes = {
  set: 'SET'
};
const value = 'VALUE';
const value2 = 'VALUE2';

const reducer = createReducer(actionTypes);

describe('createReducer', () => {
  it('is a function', () => assert(typeof reducer === 'function'));

  it('handles SET', () => {
    assert(reducer(undefined, {type: actionTypes.set, value}) === value, 'sets from undefined');
    assert(reducer(value, {type: actionTypes.set, value: value2}) === value2, 'sets another value');
  });
});
