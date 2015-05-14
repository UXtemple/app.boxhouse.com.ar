import { Actions } from 'flummox';
import { CompanyRecord } from './records';

export default class CompanyActions extends Actions {
  add(company) {
    return new CompanyRecord(company);
  }

  loadCompanies(companies) {
    return companies.map(company => new CompanyRecord(company));
  }
}
