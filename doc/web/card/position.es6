import React from 'react';

export default class BoxPosition extends React.Component {
  render() {
    return (
      <div style={style}>
        {this.props.box.position.shelf}
        {this.props.box.position.rack}
        {this.props.box.position.height}
        {this.props.box.position.position}
        {this.props.box.position.depth}
      </div>
    );
  }
}

const style = {
  backgroundColor: '#f2f2f2',
  flexDirection: 'row',
  padding: '10px 0 10px 25px',
  width: '100%'
}
