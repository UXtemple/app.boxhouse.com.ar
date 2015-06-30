import { Actions } from 'flummox';
import { DocRecord } from './records';

export default class DocActions extends Actions {
  add(doc) {
    return DocRecord.from(doc);
  }

  loadDocs(docs) {
    return docs.map(doc => DocRecord.from(doc));
  }
}
