import { Actions } from 'flummox';
import { DocRecord } from './records';

export default class DocActions extends Actions {
  loadDocs(docs) {
    return docs.map(doc => new DocRecord(doc));
  }
}
