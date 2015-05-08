import { ActionBlock } from 'panels-ui/blocks';
import React from 'react';

let style = {
  base: {
    backgroundColor: '#F2F2F2',
    borderBottom: '1px solid #cccccc',
    width: 360
  },
  active: {
    color: 'pink'
  }
}

export default class Docs extends React.Component {
  getCard(doc) {
    let href = `/box-1/doc-${doc.id}`;

    return <ActionBlock href={href} key={doc.id} style={style}>Doc {doc.id}</ActionBlock>;
  }

  render() {
    let docs = this.props.docs.map(this.getCard);

    return <div>{docs}</div>;
  }
}

// Doc.propTypes = {
//   doc: React.PropTypes.instanceOf(DocRecord).isRequired
// }
