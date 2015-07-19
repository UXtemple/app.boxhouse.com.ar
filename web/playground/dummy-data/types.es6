import Boxes from '../../boxes/type';
import CompanyProfile from '../../company/type';
import Dashboard from '../../dashboard/type';
import Doc from '../../doc/type';
import Docs from '../../docs/type';
import i from 'seamless-immutable';

export default i({
  'dashboard.boxhouse.com.dev:3000': {
    'Dashboard': Dashboard
  },
  'uxtemple.boxhouse.com.dev:3000': {
    'Boxes': Boxes,
    'CompanyProfile': CompanyProfile,
    'Doc': Doc,
    'Docs': Docs
  }
});
