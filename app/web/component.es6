import DocAdd from '../../doc/web/add/component';
import { Container as DocContainer } from '../../doc/web/doc';
import { Container as DocsContainer } from '../../doc/web/docs';
import { DocRecord } from '../../doc/records';
import { Panels, Panel } from 'panels-ui'
import React from 'react';

export default class App extends React.Component {
  render() {
    let boxId = 1;
    let docId = 1;

    let boxes = <div>Here go the boxes</div>

        // <DocAdd boxId={boxId} />
    let docs = (
      <DocsContainer boxId={boxId} />
    );
    // let doc = <DocContainer id={docId} />;

    let doc = <DocAdd boxId={boxId} flux={this.props.flux} />

    return (
      <Panels>
        <Panel>{boxes}</Panel>
        <Panel>{docs}</Panel>
        <Panel>{doc}</Panel>
      </Panels>
    );
  }
}

App.propTypes = {
  docs: React.PropTypes.arrayOf(DocRecord)
}
App.defaultProps = {
  docs: []
}
