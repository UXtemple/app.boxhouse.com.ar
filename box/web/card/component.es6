import { ActionBlock } from 'panels-ui/blocks';
import { BoxRecord } from '../../records';
import React from 'react';
import DeleteIcon from '../../../icons/delete';
import SwitchOnIcon from '../../../icons/switch-on';
import SwitchOffIcon from '../../../icons/switch-off';

class Delete extends React.Component  {
  render() {
    return <DeleteIcon style={this.props.style} fill={{active: 'rgba(255,255,255,0.5)', base: 'white'}} width='35' height='35' />;
  }
}

class Switch extends React.Component  {
  render() {
    const props = {
      style: this.props.style, 
      fill: {active: 'rgba(255,255,255,0.5)', base: 'white'},
      width: 35,
      height: 20
    }
    return this.props.on ? <SwitchOnIcon {...props}/> : <SwitchOffIcon {...props}/>
  }
}

export default class BoxCard extends React.Component {
  render() {
    let uri = `/box-${this.props.box.id}`;
    
    return (
      <div style={style.card}>
        <div style={style.box}>
          <ActionBlock href={uri} style={style.action}>
            <div style={style.documentCount.wrapper}>
              <div style={style.documentCount.number}>{this.props.box.documentCount}</div>
              <div style={style.documentCount.label}>documents inside</div>
            </div>
            <div style={style.arrow}>
              <div>></div>
            </div>
          </ActionBlock>
          <div style={style.tools}>
            <Delete style={style.tool}/>
            <div style={style.separator}/>
            <div style={style.switch}>
              <Switch on={this.props.box.full} />
              <div>{this.props.box.full ? 'FULL' : 'FREE'}</div>
            </div>
            <div style={style.separator}/>
            <div style={style.tool}>+</div>
          </div>
        </div>
        <div style={style.position}>
          {this.props.box.position.shelf}
          {this.props.box.position.rack}
          {this.props.box.position.height}
          {this.props.box.position.position}
          {this.props.box.position.depth}
        </div>
      </div>
    );
  }
}

BoxCard.propTypes = {
  box: React.PropTypes.instanceOf(BoxRecord).isRequired
}

const style = {
  card: {
    alignItems: 'center',
    background: 'linear-gradient(to bottom, #F7E4BF, #C7B699)',
    marginTop: 25
  },
  box: {
    background: 'linear-gradient(135deg, #66ed8c, #00bd70, #00bd70)',
    borderRadius: 5,
    color: 'white',
    width: '65%'
  },
  action: {
    base: {
      flexDirection: 'row',
      padding: 25
    },
    active: {
    }
  },
  arrow: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  documentCount: {
    number: {
      fontSize: 50,
      lineHeight: '50px',
    },
    label: {
      textTransform: 'uppercase',
    },
    wrapper: {
      color: 'white',
      flexDirection: 'column',
      flex: 1
    }
  },
  position: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    padding: '10px 0 10px 25px',
    width: '100%'
  },
  tools: {
    borderTop: '1px solid rgba(255,255,255,0.3)',
    margin: '0px 25px',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  tool: {
    alignItems: 'center',
    padding: '25px 0',
    width: '30%'
  },
  switch: {
    alignItems: 'center',
    padding: '25px 0',
    width: '30%'
  },
  separator: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    margin: '25px 2.25%',
    width: '0.5%'
  }
}