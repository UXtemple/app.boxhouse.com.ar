import { ActionIconBlock } from 'panels-ui/blocks';
import { CompanyRecord } from '../../records';
import ArrowIcon from '../../../icons/arrow';
import React from 'react';

export default class CompanyCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ActionIconBlock href={this.props.company.uri} style={style} icon={ArrowIcon} {...this.props}>
        <div style={style.name}>{this.props.company.name}</div>
      </ActionIconBlock>
    );
  }

  static propTypes = {
    company: React.PropTypes.instanceOf(CompanyRecord) //.isRequired
  }
}

const style = {
  action: {
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
    }
  },
  icon: {
    base: {
      fill: '#00b3e3'
    },
    active: {
      fill: 'rgba(0, 179, 227, 0.3)'
    }
  },
  name: {
    marginRight: 20
  }
}
