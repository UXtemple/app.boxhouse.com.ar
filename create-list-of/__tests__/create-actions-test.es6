import assert from 'assert';
import createActions from '../create-actions';

const actionTypes = {
  add: 'ADD',
  remove: 'REMOVE'
};
const actionValue = 'VALUE';
const actions = createActions(actionTypes);

describe('createActions', () => {
  it('#add', () => {
    assert(typeof actions.add === 'function', 'function');

    const {type, value} = actions.add(actionValue);
    assert(type === actionTypes.add, 'type');
    assert(value === actionValue, 'type');
  });

  it('#remove', () => {
    assert(typeof actions.remove === 'function', 'function');

    const {type, value} = actions.remove(actionValue);
    assert(type === actionTypes.remove, 'type');
    assert(value === actionValue, 'type');
  });
});
