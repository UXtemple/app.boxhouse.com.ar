import React from 'react';

const style = {
  cursor: 'pointer'
}

export default class SwitchOffIcon extends React.Component {
  render() {
    const {height, width} = this.props;
    let fill = this.props.fill;

    return (
      <span style={{...style, ...this.props.style}}>
        <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='-63 97 64 32'>
          <g>
            <path fill={fill} d="M-13.189,99.611H-48.81c-7.381,0-13.387,6.005-13.387,13.387s6.006,13.389,13.387,13.389h35.621
              c7.381,0,13.388-6.007,13.388-13.389S-5.809,99.611-13.189,99.611z M-13.189,124.387H-48.81c-6.279,0-11.387-5.109-11.387-11.389
              s5.108-11.387,11.388-11.387h35.62c6.278,0,11.388,5.107,11.388,11.387C-1.803,119.277-6.911,124.387-13.189,124.387z"/>
            <circle fill={fill} cx="-47.996" cy="112.999" r="9.226"/>
          </g>
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
