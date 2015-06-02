import { ActionBlock } from 'panels-ui/blocks';
import { CompanyRecord } from '../../records';
import React from 'react';
import ArrowIcon from '../../../icons/arrow';

export default class CompanyCard extends React.Component {
  render() {
    return (
      <ActionBlock href='/profile' style={style}>
        <div>{this.props.company.name}</div>
        <ArrowIcon style={style.arrow} />
      </ActionBlock>  
    )
  }
  static propTypes = {
    company: React.PropTypes.instanceOf(CompanyRecord).isRequired
  }
}


const style = {
  base: {
    alignSelf: 'center',
    alignItems: 'center',
    color: '#00b3e3',
    flexDirection: 'row',
    fontSize: 30,
    //justifyContent: 'center',
    margin: '25px 50px 0px 51px',
    width: 'auto',
    padding: 0
  },
  active: {
    color: 'rgba(0, 179, 227, 0.3)'
  },
  arrow: {
    //alignSelf: 'center'
  }
}

