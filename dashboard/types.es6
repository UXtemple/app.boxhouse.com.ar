import { default as Companies } from '../company/web/companies/container';
import { default as DashboardTools } from '../dashboard/web/tools/component';
import { TitleBlock } from 'panels-ui/blocks';

export default [{
  name: 'Companies',
  component: Companies
}, {
  name: 'DashboardTools',
  component: DashboardTools
}, {
  name: 'Title',
  component: TitleBlock
}];
