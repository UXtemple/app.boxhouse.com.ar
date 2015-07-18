import BOXES_DUMMY_DATA from '../../../boxes/dummy-data';
import COMPANIES_DUMMY_DATA from '../../../companies/dummy-data';
import createBoxhouseApp from '../../../create-boxhouse-app';
import createBoxhouseDashboard from '../../../create-boxhouse-dashboard';
import DOCS_DUMMY_DATA from '../../../docs/dummy-data';
import i from 'seamless-immutable';

const boxhouseDashboardContext = createBoxhouseDashboard({
  companies: i(COMPANIES_DUMMY_DATA)
});

const uxtempleBoxhouseContext = createBoxhouseApp({
  companies: i(COMPANIES_DUMMY_DATA),
  boxes: i(BOXES_DUMMY_DATA),
  docs: i(DOCS_DUMMY_DATA)
});

export default i({
  'dashboard.boxhouse.com.dev:3000': boxhouseDashboardContext,
  'uxtemple.boxhouse.com.dev:3000': uxtempleBoxhouseContext
});
