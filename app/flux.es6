import * as Box from '../box';
import * as Company from '../company';
import * as Doc from '../doc';
import { Flux } from 'flummox';

export default class AppFlux extends Flux {
  constructor() {
    super();

    this.createActions('box', Box.Actions);
    this.createStore('box', Box.Store, this);

    this.createActions('company', Company.Actions);
    this.createStore('company', Company.Store, this);

    this.createActions('doc', Doc.Actions);
    this.createStore('doc', Doc.Store, this);
  }
}
