import { connect } from 'redux/react';
import { Panel } from 'panels-ui';
import { Title } from 'panels-blocks';
import companyShape from './shape';
import React, { PropTypes } from 'react';

@connect((state, {companyId}) => ({company: state.companies[companyId]}))
export default class CompanyProfile {
  render() {
    const { company, width } = this.props;

    return (
      <Panel style={style.panel} width={width}>
        <Title style={style.profile}>Profile</Title>
        <div>Name: {company.name}</div>
        <div>Uri: {company.uri}</div>
      </Panel>
    )
  }

  static propTypes = {
    company: companyShape.isRequired,
    companyId: PropTypes.string.isRequired
  }
}

const style = {
  panel: {
    backgroundColor: '#00b3e3'
  },
  profile: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    margin: '25px 0 0 0',
    padding: 0
  },
};
