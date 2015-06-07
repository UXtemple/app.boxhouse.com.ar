import * as Company from '../company';
import { Flux } from 'flummox';

export default class DashboardAppFlux extends Flux {
  constructor() {
    super();

    this.createActions('company', Company.Actions);
    this.createStore('company', Company.Store, this);
  }
}
