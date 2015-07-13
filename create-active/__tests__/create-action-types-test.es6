import assert from 'assert';
import createActionTypes from '../create-action-types';

const STUFF = 'STUFF';
const actionTypes = createActionTypes(STUFF);

describe('createActionTypes', () => {
  it(`has ${STUFF}:SET`, () => assert(actionTypes.set === `${STUFF}_ACTIVE:SET`));
});
