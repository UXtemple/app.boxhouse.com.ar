import assert from 'assert';
import createActionTypes from '../create-action-types';

const STUFF = 'STUFF';
const actionTypes = createActionTypes(STUFF);

describe('createActionTypes', () => {
  it(`has ${STUFF}:ADD`, () => assert(actionTypes.add === `${STUFF}_LIST:ADD`));
  it(`has ${STUFF}:REMOVE`, () => assert(actionTypes.remove === `${STUFF}_LIST:REMOVE`));
});
