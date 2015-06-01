import React from 'react';

const style = {
  cursor: 'pointer'
}

export default class DeleteIcon extends React.Component {
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
          <g>
						<path fill={fill} d="M32,52.041c0.552,0,1-0.447,1-1V26.315c0-0.552-0.447-1-1-1s-1,0.448-1,1v24.726
							C31,51.594,31.448,52.041,32,52.041z"/>
						<path fill={fill} d="M25.099,52.041c0.016,0,0.032,0,0.047-0.001c0.552-0.025,0.978-0.494,0.953-1.046l-1.15-24.726
							c-0.026-0.552-0.51-0.976-1.045-0.953c-0.552,0.026-0.978,0.494-0.953,1.045l1.15,24.727
							C24.125,51.623,24.568,52.041,25.099,52.041z"/>
						<path fill={fill} d="M38.346,52.04c0.017,0.001,0.032,0.001,0.048,0.001c0.53,0,0.973-0.418,0.998-0.953l1.15-24.727
							c0.025-0.552-0.4-1.02-0.952-1.045c-0.592-0.016-1.02,0.4-1.046,0.953l-1.15,24.726C37.368,51.546,37.794,52.015,38.346,52.04z"/>
						<path fill={fill} d="M43.46,7.606h-4.881c-0.107-2.162-1.37-3.82-2.979-3.82h-7.199c-1.609,0-2.872,1.659-2.979,3.82h-4.881
							c-4.062,0-7.366,3.304-7.366,7.366v1.273c0,0.552,0.448,1,1,1h0.741L17.2,53.462c0,3.723,3.028,6.751,6.75,6.751h16.1
							c3.722,0,6.75-3.028,6.748-6.688l2.287-36.279h0.74c0.553,0,1-0.448,1-1v-1.273C50.825,10.911,47.521,7.606,43.46,7.606z
							 M28.401,5.786H35.6c0.357,0,0.878,0.678,0.981,1.733h-9.162C27.522,6.464,28.044,5.786,28.401,5.786z M15.174,14.972
							c0-2.958,2.407-5.366,5.366-5.366H43.46c2.958,0,5.365,2.407,5.365,5.366v0.273H15.174V14.972z M44.8,53.462
							c0,2.62-2.131,4.751-4.75,4.751h-16.1c-2.619,0-4.75-2.131-4.751-4.813l-2.279-36.154h30.162L44.8,53.462z"/>
					</g>
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
