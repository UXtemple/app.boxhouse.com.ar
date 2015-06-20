import { TitleBlock } from 'panels-ui/blocks';
import { CompanyRecord } from '../../records';
import React from 'react';

export default class CompanyProfile extends React.Component {
  render() {
    const title = `${this.props.company.name}'s profile`;

    return (
      <div style={{color: 'white', width: '100%'}}>
        <TitleBlock style={{margin: '25px 0 0 0', fontSize: 30, alignSelf: 'center'}}>{title}</TitleBlock>
      </div>
    );
  }

  static propTypes = {
    company: React.PropTypes.instanceOf(CompanyRecord) //.isRequired
  }
}
