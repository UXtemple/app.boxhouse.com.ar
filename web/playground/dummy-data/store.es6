import boxes from '../../boxes/panel.json';
import doc from '../../doc/panel.json';
import docs from '../../docs/panel.json';
import i from 'seamless-immutable';

// import companyPanel from '../../company/panel.json';
// import dashboardPanel from '../../dashboard/panel.json';

export default i({
  'uxtemple.boxhouse.com.dev:3000': {
    lookup: ['/:boxid', '/:boxid/:docid'],
    panels: {
      '/': boxes,
      '/:boxid': docs,
      '/:boxid/:docid': doc
    }
  }
});
