import home from '../../home/panel.json';
// import boxPanel from '../../box/panel.json';
// import companyPanel from '../../company/panel.json';
// import dashboardPanel from '../../dashboard/panel.json';
// import docPanel from '../../doc/panel.json';
import i from 'seamless-immutable';

export default i({
  'uxtemple.boxhouse.com.dev:3000': {
    panels: {
      '/': home
    }
  }
});
