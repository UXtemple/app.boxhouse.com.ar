import objectToArray from '../utils/object-to-array';

export function listForCompany(state, companyId) {
  return objectToArray(state).filter(i => i.companyId === companyId);
}
