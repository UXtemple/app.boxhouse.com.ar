import { List } from 'immutable';
import { StateRecord } from './records';
import { Store } from 'flummox';

export default class DocStore extends Store {
  static assignState(oldState, newState) {
    return newState;
  }

  constructor(flux) {
    super();

    const docActionIds = flux.getActionIds('doc');
    this.register(docActionIds.loadDocs, this.loadDocs);

    this.state = new StateRecord();
  }

  get all() {
    return this.state.docs.toArray();
  }

  boxId(boxId) {
    return this.state.docs.filter(doc => doc.boxId === boxId);
  }

  id(id) {
    return this.state.docs.find(doc => doc.id === id);
  }

  loadDocs(docs) {
    this.setState(this.state.set('docs', List(docs)));
  }
}
