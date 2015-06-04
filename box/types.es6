import { default as AddDoc } from '../doc/web/add-doc';
import { default as BoxLocation } from '../box/web/location';
import { default as Docs } from '../doc/web/docs/container';
import { default as Search } from '../doc/web/search';

export default [{
  name: 'AddDoc',
  component: AddDoc
}, {
  name: 'BoxLocation',
  component: BoxLocation
}, {
  name: 'Docs',
  component: Docs
}, {
  name: 'Search',
  component: Search
}];
