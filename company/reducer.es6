import * as t from './action-types';
import i from 'seamless-immutable';

const initialState = i({
  id: undefined,
  name: 'Company',
  uri: 'company.boxhouse.com.dev:3000'
});

export default function companyReducer(state=initialState, {type, ...payload}) {
  switch (type) {
    case t.SET_NAME: return setName(state, payload);
    default: return state;
  }
}

function setName(state, {name}) {
  return state.merge({name});
}
