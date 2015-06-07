import { TitleBlock } from 'panels-ui/blocks';
import { CompanyRecord } from '../../records';
import React from 'react';

export default class CompanyProfile extends React.Component {
  render() {
    return (
      this.props.company ?
        <TitleBlock>{this.props.company.name}</TitleBlock> :
        <span>loading</span>
    );
  }

  static propTypes = {
    company: React.PropTypes.instanceOf(CompanyRecord) //.isRequired
  }
}
