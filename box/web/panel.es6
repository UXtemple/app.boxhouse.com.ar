import { Container as BoxesFeed } from './feed';
import { Card as CompanyCard } from '../../company/web';
import { Panel } from 'panels-ui';
import React from 'react';
import SearchIcon from '../../icons/search';
import PlusIcon from '../../icons/plus';

class Search extends React.Component  {
  render() {
    return <SearchIcon fill={{active: '#00b3e3', base: '#231f20'}} width='35' height='35' />;
  }
}

class AddBox extends React.Component  {
  render() {
    return <PlusIcon fill={{active: '#00b3e3', base: '#231f20'}} width='35' height='35' />;
  }
}

export default class BoxesPanel extends React.Component {
  render() {
    return (
      <Panel style={style.panel}>
        <CompanyCard id={1} />
        <div style={style.tools}>
          <Search />
          <AddBox />
        </div>

        <BoxesFeed companyId={1} />
      </Panel>
    )
  }
}

const style= {
  tools: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '25px 0 25px 0',
    width: 80
  },
  panel: {
    backgroundColor: '#F7E4BF'
  }
}