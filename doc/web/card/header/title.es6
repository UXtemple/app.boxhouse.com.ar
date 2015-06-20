import React from 'react';

export default class DocTitle extends React.Component {
  render() {
    const titleStyle = {
      ...style,
      ...this.props.style
    }
    return <div style={titleStyle}>004</div>;
  }

  static propTypes = {
    style: React.PropTypes.object
  }
  static defaultProps = {
    style: {}
  }
}

const style = {
  color: '#00bd70',
  fontSize: 25,
  justifyContent: 'center'
}
