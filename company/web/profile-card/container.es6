import { connect } from 'redux/react';
import InnerComponent from './component';
import React, { PropTypes } from 'react';

@connect(({company}) => ({company}))
export default class CompanyProfileCardContainer {
  render() {
    return <InnerComponent {...this.props} />;
  }

  static propTypes = {
    company: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }
}
