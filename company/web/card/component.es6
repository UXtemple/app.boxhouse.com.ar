import { ActionBlock } from 'panels-ui/blocks';
import { CompanyRecord } from '../../records';
import React from 'react';

let style = {
  base: {
    color: 'lightblue',
    width: 360
  },
  active: {
    color: 'blue'
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
