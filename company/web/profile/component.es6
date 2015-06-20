import { TitleBlock } from 'panels-ui/blocks';
import { CompanyRecord } from '../../records';
import React from 'react';

export default class CompanyProfile extends React.Component {
  render() {
    return (
      <div style={{color: 'white', width: '100%'}}>
        <TitleBlock style={{margin: '25px 0 0 0', fontSize: 30, alignSelf: 'center'}}>Profile</TitleBlock>
      </div>
    );
  }

  static propTypes = {
    company: React.PropTypes.instanceOf(CompanyRecord) //.isRequired
  }
}
