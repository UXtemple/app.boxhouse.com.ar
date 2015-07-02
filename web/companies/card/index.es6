import { connect } from 'redux/react';
import companyShape from '../../company/shape';
import InnerComponent from './component';
import React, { PropTypes } from 'react';

@connect(({companies}, {id}) => ({company: companies[id]}))
export default class CompanyCardContainer {
  render() {
    return <InnerComponent company={this.props.company} />;
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    company: companyShape.isRequired
  }
}
