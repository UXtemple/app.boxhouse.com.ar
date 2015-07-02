import DocCard from '../card';
import docShape from '../shape';
import React, { PropTypes } from 'react';

export default class Docs {
  render() {
    const docs = this.props.docs.map(({id}) => <DocCard key={id} id={id} />);
    return <div style={{width: '100%'}}>{docs}</div>;
  }

  static propTypes = {
    docs: PropTypes.arrayOf(docShape).isRequired
  }
}

