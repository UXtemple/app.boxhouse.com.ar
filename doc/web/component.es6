import DocRecord from '../records/doc';
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
      <div style={{border: '1px solid black', width: 360}}>
        <div>{this.props.doc.type}</div>
        <div>{this.props.doc.office}</div>

        <div>Fecha</div>
        <LabelValue label='desde' value={this.props.doc.date.from} />
        <LabelValue label='hasta' value={this.props.doc.date.to} />

        <div>Número</div>
        <LabelValue label='desde' value={this.props.doc.number.from} />
        <LabelValue label='hasta' value={this.props.doc.number.to} />

        <LabelValue label='caja' value={this.props.doc.boxId} />
        <LabelValue label='empresa' value={this.props.doc.companyId} />
      </div>
    );
  }
}

Doc.propTypes = {
  doc: React.PropTypes.instanceOf(DocRecord).isRequired
}
