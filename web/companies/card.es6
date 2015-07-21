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
          <div style={{alignSelf: 'center'}}>{company.name}</div>
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
      color: '#F7E4BF',
      flexDirection: 'row',
      fontSize: 30,
      marginTop: 25
    },
    active: {
      color: 'rgba(247,228,191,0.3)'
    }
  }
}