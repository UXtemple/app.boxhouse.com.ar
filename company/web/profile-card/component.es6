import { ActionWithIconBlock } from 'panels-blocks';
import SettingsIcon from '../../../icons/settings';
import React, { PropTypes } from 'react';

export default class CompanyProfileCard {
  render() {
    const { name: nameStyle, ...actionStyle } = style;

    return (
      <ActionWithIconBlock href='profile' style={actionStyle} icon={SettingsIcon}>
        <div style={nameStyle}>{this.props.company.name}</div>
      </ActionWithIconBlock>
    );
  }

  static propTypes = {
    company: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
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
