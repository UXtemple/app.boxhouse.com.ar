import { connect } from 'redux/react';
import { list } from '../../companies/getters';
import { Panel } from 'panels-ui';
import { Title } from 'panels-blocks';
import companyShape from '../company/shape';
import List from '../companies/list';
import React, { PropTypes } from 'react';
import Tools from './tools';

@connect(state => ({
  companies: list(state.companies)
}))
export default class Dashboard {
  render() {
    const { companies } = this.props;

    return (
      <Panel style={style.panel}>
        <Title style={style.title}>Dashboard</Title>
        <Tools />
        <List companies={companies} />
      </Panel>
    );
  }

  static propTypes = {
    companies: PropTypes.arrayOf(companyShape).isRequired
  }
}

const style = {
  panel: {
    backgroundColor: '#323232',
    paddingBottom: 100,
    maxWidth: 360,
    width: '100vw'
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    margin: '25px 0px 0px'
  }
};
