import { createRedux } from 'redux';
// import pouchify from './pouchify';
// mport { pouchMap as boxesPouchMap, reducer as boxes } from './boxes';
import { reducer as boxes } from './boxes';
import { reducer as boxesActive } from './boxes-active';
import { reducer as boxesList } from './boxes-list';
import { reducer as company } from './company';
import { reducer as docs } from './docs';

export default function createBoxhouseApp(initialData) {
  return createRedux({
    boxesActive,
    boxesList,
    // pouchify(boxes, {map: boxesPouchMap}),
    boxes,
    company,
    docs
  }, initialData);
};
