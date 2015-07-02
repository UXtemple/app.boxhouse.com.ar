import { connect } from 'redux/react';
import companyShape from '../../company/shape';
import InnerComponent from './component';
import React, { PropTypes } from 'react';

// TODO getter
@connect(({companies}) => ({companies: Object.keys(companies).map(id => ({id}))}))
export default class CompaniesContainer {
  render() {
    return <InnerComponent companies={this.props.companies} />;
  }

  static propTypes = {
    companies: PropTypes.arrayOf(companyShape).isRequired
  }
}
