import { Container as BoxesFeed } from './feed';
import { Card as CompanyCard } from '../../company/web';
import { Panel } from 'panels-ui';
import React from 'react';

class Search extends React.Component  {
  render() {
    return <div>Search</div>;
  }
}

class AddBox extends React.Component  {
  render() {
    return <div>AddBox</div>;
  }
}

export default class BoxesPanel extends React.Component {
  render() {
    return (
      <Panel>
        <CompanyCard id={1} />

        <Search />
        <AddBox />

        <BoxesFeed companyId={1} />
      </Panel>
    )
  }
}
