import React from 'react';

const style = {
  cursor: 'pointer'
}

export default class SwitchOnIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    const {height, width} = this.props;

    return (
      <span style={{...style, ...this.props.style}}>
        <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='-63 97 64 32'>
          <path fill={this.props.fill} d="M-13.189,99.611H-48.81c-7.381,0-13.387,6.006-13.387,13.388s6.006,13.389,13.387,13.389h35.621
            c7.381,0,13.388-6.007,13.388-13.389S-5.809,99.611-13.189,99.611z M-31.786,109.805l-9.569,9.571l-5.392-5.393
            c-0.586-0.587-0.586-1.536,0-2.122s1.536-0.586,2.121,0l3.271,3.271l7.448-7.449c0.585-0.586,1.535-0.586,2.121,0
            S-31.2,109.219-31.786,109.805z M-13.329,122.226c-5.095,0-9.224-4.131-9.224-9.227c0-5.094,4.129-9.224,9.224-9.224
            s9.226,4.13,9.226,9.224C-4.104,118.095-8.234,122.226-13.329,122.226z"/>
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
    height: 64,
    width: 64
  }
}
