import React from 'react';

const baseStyle = {
  cursor: 'pointer'
}

export default class PlusIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    const {height, style: propsStyle, width, ...props} = this.props;
    const style = {...baseStyle, ...propsStyle};
    let fill = this.props.fill[this.state.hover ? 'active' : 'base'];

    return (
      <span style={style} {...props} onMouseEnter={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})} onClick={this.props.onClick}>
        <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 64 64'>
          <g>
            <path fill={fill} d="M43.15,30.969H32.807V20.625c0-0.829-0.671-1.5-1.5-1.5s-1.5,0.671-1.5,1.5v10.344H19.462
            c-0.829,0-1.5,0.671-1.5,1.5s0.671,1.5,1.5,1.5h10.345v10.344c0,0.828,0.671,1.5,1.5,1.5s1.5-0.672,1.5-1.5V33.969H43.15
            c0.828,0,1.5-0.671,1.5-1.5S43.979,30.969,43.15,30.969z"/>
            <path fill={fill} d="M31.307,3.656c-15.888,0-28.813,12.925-28.813,28.813c0,15.887,12.926,28.813,28.813,28.813
            s28.812-12.926,28.812-28.813C60.119,16.582,47.194,3.656,31.307,3.656z M31.307,58.282c-14.233,0-25.813-11.58-25.813-25.813
            c0-14.233,11.58-25.813,25.813-25.813s25.812,11.58,25.812,25.813C57.119,46.702,45.54,58.282,31.307,58.282z"/>
          </g>
        </svg>
      </span>
    );
  }

  static propTypes = {
    fill: React.PropTypes.shape({
      active: React.PropTypes.string.isRequired,
      base: React.PropTypes.string.isRequired
    }),
    height: React.PropTypes.number,
    onClick: React.PropTypes.func,
    width: React.PropTypes.number
  }

  static defaultProps = {
    fill: {
      active: 'red',
      base: '#323232'
    },
    height: 64,
    width: 64
  }
}
