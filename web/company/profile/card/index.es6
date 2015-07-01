import { connect } from 'redux/react';
import companyShape from '../../shape';
import InnerComponent from './component';
import React, { PropTypes } from 'react';

@connect(({company}) => ({company}))
export default class CompanyProfileCardContainer {
  render() {
    return <InnerComponent {...this.props} />;
  }

  static propTypes = {
    company: companyShape.isRequired
  }
}
