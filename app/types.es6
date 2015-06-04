import { default as AddBox } from '../box/web/add-box';
import { default as Boxes } from '../box/web/boxes/container';
import { default as CompanyCard } from '../company/web/card/container';
import { default as Search } from '../box/web/search';

export default [{
  name: 'AddBox',
  component: AddBox
}, {
  name: 'Boxes',
  component: Boxes
}, {
  name: 'CompanyCard',
  component: CompanyCard
}, {
  name: 'Search',
  component: Search
}];
