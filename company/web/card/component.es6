import { ActionBlock } from 'panels-ui/blocks';
import { CompanyRecord } from '../../records';
import React from 'react';

let style = {
  base: {
    color: '#00b3e3',
    fontSize: 30,
    marginTop: 25,
    width: 360
  },
  active: {
    color: '#231f20'
  }
}

export default class CompanyCard extends React.Component {
  render() {
    return <ActionBlock href='/profile' style={style}>{this.props.company.name}</ActionBlock>
  }
}

CompanyCard.propTypes = {
  company: React.PropTypes.instanceOf(CompanyRecord).isRequired
}
