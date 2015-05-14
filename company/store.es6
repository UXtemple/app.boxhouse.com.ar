import { List } from 'immutable';
import { StateRecord } from './records';
import { Store } from 'flummox';

export default class CompanyStore extends Store {
  static assignState(oldState, newState) {
    return newState;
  }

  constructor(flux) {
    super();

    const companyActionIds = flux.getActionIds('company');
    this.register(companyActionIds.add, this.add);
    this.register(companyActionIds.loadCompanies, this.loadCompanies);

    this.state = new StateRecord();
  }

  get all() {
    return this.state.companies.toArray();
  }

  id(id) {
    return this.state.companies.find(company => company.id === id);
  }

  add(company) {
    this.setState(this.state.set('companies', this.state.companies.push(company)));
  }

  loadCompanies(companies) {
    this.setState(this.state.set('companies', List(companies)));
  }
}
