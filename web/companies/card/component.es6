import { ActionWithIconBlock } from 'panels-blocks';
import ArrowIcon from '../../icons/arrow';
import React from 'react';

export default class CompanyCard {
  render() {
    return (
      <ActionWithIconBlock href={this.props.company.uri} style={style} icon={ArrowIcon} {...this.props}>
        <div style={style.name}>{this.props.company.name}</div>
      </ActionWithIconBlock>
    );
  }

  static propTypes = {
    // company:
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
    base: {
      fill: '#F7E4BF'
    },
    active: {
      fill: 'rgba(247,228,191,0.3)'
    }
  },
  name: {
    flex: 1,
    textAlign: 'center'
  }
}
