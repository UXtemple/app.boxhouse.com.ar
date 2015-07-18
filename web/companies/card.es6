import { Action } from 'panels-blocks';
import ArrowIcon from '../icons/arrow';
import companyShape from '../company/shape';
import React from 'react';

export default class CompanyCard {
  render() {
    const { company } = this.props;

    return (
      <Action href={company.uri} style={style.action}>
        {active => (
          <div style={{alignItems: 'center', flexDirection: 'row'}}>
            <div style={style.name}>{company.name}</div>
            <ArrowIcon fill={style.icon[active ? 'active' : 'base']} />
          </div>
        )}
      </Action>
    );
  }

  static propTypes = {
    company: companyShape.isRequired
  }
}

const style = {
  action: {
    base: {
      // alignSelf: 'center',
      alignItems: 'center',
      color: '#F7E4BF',
      flexDirection: 'row',
      fontSize: 30,
      //justifyContent: 'center',
      marginTop: 25,
      width: 'auto',
      padding: '0 20px 0 50px'
    },
    active: {
      color: 'rgba(247,228,191,0.3)'
    }
  },
  icon: {
    active: 'rgba(247,228,191,0.3)',
    base: '#F7E4BF'
  },
  name: {
    flex: 1,
    textAlign: 'center'
  }
}
