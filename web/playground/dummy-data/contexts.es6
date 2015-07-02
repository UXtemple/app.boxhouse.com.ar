import BOXES_DUMMY_DATA from '../../../boxes/dummy-data';
import createBoxhouseApp from '../../../create-boxhouse-app';
import DOCS_DUMMY_DATA from '../../../docs/dummy-data';
import i from 'seamless-immutable';

const uxtempleBoxhouseContext = createBoxhouseApp({
  company: i({
    id: '1',
    name: 'UXtemple',
    uri: 'http://uxtemple.boxhouse.com.dev:3000/'
  }),
  boxes: i(BOXES_DUMMY_DATA),
  docs: i(DOCS_DUMMY_DATA)
});

export default i({
  'uxtemple.boxhouse.com.dev:3000': uxtempleBoxhouseContext
});
