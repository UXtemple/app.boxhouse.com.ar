import boxes from '../../boxes/panel.json';
import company from '../../company/panel.json';
import dashboard from '../../dashboard/panel.json';
import doc from '../../doc/panel.json';
import docs from '../../docs/panel.json';
import i from 'seamless-immutable';

export default i({
  'uxtemple.boxhouse.com.dev:3000': {
    lookup: ['/:boxid', '/:boxid/:docid'],
    panels: {
      '/': boxes,
      '/:boxid': docs,
      '/:boxid/:docid': doc,
      '/profile': company
    }
  },
  'dashboard.boxhouse.com.dev:3000': {
    lookup: [],
    panels: {
      '/': dashboard
    }
  }
});
