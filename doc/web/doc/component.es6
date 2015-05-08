import DocRecord from '../../records/doc';
import React from 'react';

class LabelValue extends React.Component {
  render() {
    return (
      <div style={{fontSize: 14, display: 'flex', flexDirection: 'row'}}>
        <div style={{marginRight: 15, fontWeight: 700}}>{this.props.label}</div>
        <div>{this.props.value}</div>
      </div>
    );
  }
}

LabelValue.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired
}

export default class Doc extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.doc.type}</h1>
        <div>{this.props.doc.office}</div>

        <div>Fecha</div>
        <LabelValue label='desde' value={this.props.doc.date.from} />
        <LabelValue label='hasta' value={this.props.doc.date.to} />

        <div>Número</div>
        <LabelValue label='desde' value={this.props.doc.number.from} />
        <LabelValue label='hasta' value={this.props.doc.number.to} />
      </div>
    );
  }
}

Doc.propTypes = {
  doc: React.PropTypes.instanceOf(DocRecord).isRequired
}
