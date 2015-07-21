import { Action } from 'panels-blocks';
import companyShape from '../../company/shape';
import React, { PropTypes } from 'react';
import SettingsIcon from '../../icons/settings';

export default class CompanyProfileCard {
  render() {
    const { company } = this.props;

    return (
      <Action href='profile' style={style.action}>
        {active => (
          <div style={{flexDirection: 'row', alignItems: 'center'}}>
            <div style={style.name}>{company.name}</div>
            <SettingsIcon {...style.icon[active ? 'active' : 'base']} />
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
      alignSelf: 'center',
      alignItems: 'center',
      color: '#00b3e3',
      flexDirection: 'row',
      fontSize: 25,
      margin: '25px 50px 0px 51px',
      padding: 0,
      width: 'auto'
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
    marginRight: 10
  }
}
