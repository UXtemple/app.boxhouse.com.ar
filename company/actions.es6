import { Actions } from 'flummox';
import { CompanyRecord } from './records';

export default class CompanyActions extends Actions {
  add(company) {
    return new CompanyRecord(company);
  }

  setName(id, name) {
    return {id, name};
  }

  loadCompanies(companies) {
    return companies.map(company => new CompanyRecord(company));
  }
}
