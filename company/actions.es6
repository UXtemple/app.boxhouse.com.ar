import { Actions } from 'flummox';
import { CompanyRecord } from './records';

export default class CompanyActions extends Actions {
  add(company) {
    return CompanyRecord.from(company);
  }

  setName(id, name) {
    return {id, name};
  }

  loadCompanies(companies) {
    return companies.map(company => CompanyRecord.from(company));
  }
}
