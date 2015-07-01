import React, { Component } from 'react';
import SwitchOnIcon from './icons/switch-on';
import SwitchOffIcon from './icons/switch-off';

export default class Switch extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.on !== nextProps.on) {
      this.setState({hover: false});
    }
  }

  render() {
    const fill = this.state.hover ? 'rgba(255,255,255,0.5)' : 'white';
    const props = {
      height: 20,
      style: this.props.style,
      width: 35
    };

    let Component = this.props.on ?
      (this.state.hover ? SwitchOffIcon : SwitchOnIcon) :
      (this.state.hover ? SwitchOnIcon : SwitchOffIcon);

    return (
      <span onMouseEnter={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})}>
        <Component {...props} fill={fill} />
      </span>
    );
  }
}
