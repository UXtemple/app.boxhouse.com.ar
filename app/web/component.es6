import { Container as DocContainer } from '../../doc/web';
import { DocRecord } from '../../doc/records';
import { Panel } from 'panels-ui'
import React from 'react';

export default class App extends React.Component {
  render() {
    let docs = this.props.docs.map(doc => <DocContainer id={doc.id} key={doc.id} />);

    return <Panel style={{fontSize: 16}}>{docs}</Panel>;
  }
}

App.propTypes = {
  docs: React.PropTypes.arrayOf(DocRecord)
}
App.defaultProps = {
  docs: []
}
