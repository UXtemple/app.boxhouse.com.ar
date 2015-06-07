import { Actions } from 'flummox';
import { BoxRecord } from './records';

export default class BoxActions extends Actions {
  add(box) {
    return BoxRecord.from(box);
  }

  loadBoxes(boxes) {
    return boxes.map(box => BoxRecord.from(box));
  }

  toggleFull(id) {
    return id;
  }
}
