import React from 'react';

export default class ArrowIcon extends React.Component {

  render() {
    const {height, width} = this.props;
    const fill = this.props.fill;

    return (
      <span style={this.props.style}>
        <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 21.5 64'>
          <path fill={fill} d="M4.411,18.083c-0.391-0.391-1.023-0.391-1.414,0c-0.391,0.391-0.391,1.023,0,1.414L15.5,32L2.997,44.502
            c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293c0.256,0,0.512-0.098,0.707-0.293L18.328,32L4.411,18.083z"/>
        </svg>
      </span>
    );
  }

  static propTypes = {
    fill: React.PropTypes.string,
    height: React.PropTypes.number,
    width: React.PropTypes.number
  }

  static defaultProps = {
    fill: 'white',
    height: 30,
    width: 30
  }
}
