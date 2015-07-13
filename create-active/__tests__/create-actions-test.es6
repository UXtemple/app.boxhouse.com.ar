import assert from 'assert';
import createActions from '../create-actions';

const actionTypes = {
  set: 'SET'
};
const actionValue = 'VALUE';
const actions = createActions(actionTypes);

describe('createActions', () => {
  it('#set', () => {
    assert(typeof actions.set === 'function', 'function');

    const {type, value} = actions.set(actionValue);
    assert(type === actionTypes.set, 'type');
    assert(value === actionValue, 'type');
  });
});
