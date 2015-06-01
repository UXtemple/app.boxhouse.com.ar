import { Actions } from 'flummox';
import { BoxRecord } from './records';

export default class FeedActions extends Actions {
  loadBoxes(boxes) {
    return boxes.map(box => new BoxRecord(box));
  }

  toggleFull(id) {
    return id;
  }
}
