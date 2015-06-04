import React from 'react';

const style = {
  cursor: 'pointer'
}

export default class DuplicateIcon extends React.Component {
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
      <span style={{...style, ...this.props.style}} onMouseEnter={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})}>
        <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 64 64'>
          <path fill={fill} d="M53.311,2.833H18.19c-0.552,0-1,0.448-1,1v5.296h-6.44c-0.552,0-1,0.448-1,1v50.029c0,0.553,0.448,1,1,1
							h35.12c0.553,0,1-0.447,1-1v-5.297h6.441c0.553,0,1-0.447,1-1V3.833C54.311,3.281,53.863,2.833,53.311,2.833z M44.869,59.158H11.75
							V11.129h6.438c0.001,0,0.001,0,0.002,0s0.001,0,0.002,0h26.677V59.158z M52.311,52.861h-5.441V10.129c0-0.552-0.447-1-1-1H19.19
							V4.833h33.121V52.861z"/>
				</svg>
      </span>
    );
  }

  static propTypes = {
    fill: React.PropTypes.shape({
      active: React.PropTypes.number.isRequired,
      base: React.PropTypes.number.isRequired
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
