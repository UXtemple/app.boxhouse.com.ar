import { DocRecord } from '../../doc/records';
import { Container as DocContainer } from '../../doc/web';
import React from 'react';

export default class App extends React.Component {
  render() {
    let dc = DocContainer;
    let docs = this.props.docs.map(doc => <DocContainer id={doc.id} key={doc.id} />);

    return <div style={{fontSize: 16}}>{docs}</div>;
  }
}

App.propTypes = {
  docs: React.PropTypes.arrayOf(DocRecord)
}
App.defaultProps = {
  docs: []
}
