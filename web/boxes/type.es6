import { Panel } from 'panels-ui';
import CompanyProfileCard from '../company/profile/card';
import List from './list';
import React, { PropTypes } from 'react';
import Tools from './tools';

export default class Boxes {
  render() {
    const { redux: { dispatch } } = this.context;

    return (
      <Panel style={style}>
        <CompanyProfileCard />
        <Tools dispatch={dispatch} />
        <List />
      </Panel>
    );
  }

  static contextTypes = {
    redux: PropTypes.shape({
      dispatch: PropTypes.func.isRequired
    }).isRequired
  }
}

const style = {
  backgroundColor: '#F7E4BF',
  paddingBottom: 100
};
