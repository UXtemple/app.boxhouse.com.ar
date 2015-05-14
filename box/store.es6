import { List } from 'immutable';
import { StateRecord } from './records';
import { Store } from 'flummox';

export default class BoxStore extends Store {
  static assignState(oldState, newState) {
    return newState;
  }

  constructor(flux) {
    super();

    const boxActionIds = flux.getActionIds('box');
    this.register(boxActionIds.loadBoxes, this.loadBoxes);

    this.state = new StateRecord();
  }

  id(id) {
    return this.state.boxes.find(box => box.id === id);
  }

  get boxes() {
    return this.state.boxes.toArray();
  }

  loadBoxes(boxes) {
    this.setState(this.state.set('boxes', List(boxes)));
  }

  companyId(companyId) {
    return this.state.boxes.filter(box => box.companyId === companyId);
  }
}
