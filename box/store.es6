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
    this.register(boxActionIds.add, this.add);
    this.register(boxActionIds.loadBoxes, this.loadBoxes);
    this.register(boxActionIds.toggleFull, this.toggleFull);

    this.state = new StateRecord();
  }

  add(box) {
    this.setState(this.state.set('boxes', this.state.boxes.push(box)));
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

  toggleFull(id) {
    const boxes = this.state.get('boxes');

    const boxIndex = boxes.findIndex(b => b.id === id);
    const box = boxes.get(boxIndex);

    const newBox = box.set('full', !box.full);
    const newBoxes = boxes.set(boxIndex, newBox);

    this.setState(this.state.set('boxes', newBoxes));
  }

  companyId(companyId) {
    return this.state.boxes.filter(box => box.companyId === companyId);
  }
}
