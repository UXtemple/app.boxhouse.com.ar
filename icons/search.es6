import React from 'react';

const style = {
  cursor: 'pointer'
}

export default class SearchIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    const {height, width} = this.props;
    let fill = this.props.fill[this.state.hover ? 'active' : 'base'];

    return (
      <span style={style} onMouseEnter={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})}>
        <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 64 64'>
          <path fill={fill} d='M55.314 53.242l-15.058-15.06c2.598-3.076 4.17-7.043 4.17-11.376 0-9.743-7.926-17.67-17.668-17.67-9.743 0-17.67 7.927-17.67 17.67 0 9.743 7.927 17.67 17.67 17.67 4.333 0 8.3-1.575 11.377-4.173l15.06 15.06c.292.294.677.44 1.06.44s.77-.147 1.063-.44c.582-.586.582-1.535-.004-2.12zM12.09 26.806c0-8.09 6.58-14.67 14.668-14.67s14.668 6.582 14.668 14.67-6.58 14.668-14.668 14.668c-8.09 0-14.67-6.58-14.67-14.668z'/>
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
