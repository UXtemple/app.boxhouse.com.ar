import { ActionBlock } from 'panels-ui/blocks';
import { BoxRecord } from '../../records';
import React from 'react';

export default class BoxCard extends React.Component {
  render() {
    let uri = `/box-${this.props.box.id}`;

    return (
      <div style={style.card}>
        <div style={style.box}>
          <ActionBlock href={uri} style={style.action}>
            <div style={style.documentCount.number}>{this.props.box.documentCount}</div>
            <div style={style.documentCount.label}>documents inside</div>
          </ActionBlock>
          <div style={style.toolsBorder}>
            <div style={style.tools}>
              <div style={style.delete}>DELETE</div>
              <div>{this.props.box.full ? 'FULL' : 'FREE'}</div>
              <div>+</div>
            </div>
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
    alignItems: 'center'
  },
  box: {
    //backgroundImage: 'linear-gradient(135deg, #00BD70, #00D17C)',
    backgroundColor: '#00D17C',
    borderRadius: 5,
    color: 'white',
    width: '65%',
    //height: '200px'
  },
  action: {
    base: {
      color: 'white',
      flexDirection: 'column',
      flexWrap: 'wrap',
      margin: 25,
      padding: 0,
      width: 'auto'
    },
    active: {
    }
  },
  documentCount: {
    number: {
      fontSize: 50,
      width: '100%'
    },
    label: {
      textTransform: 'uppercase',
      width: '100%'
    }
  },
  position: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: '10px 0 10px 30px',
    width: '100%'
  },
  tools: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    margin: '25px 0px 25px 0px'
  },
  toolsBorder: {
    borderTop: 'solid',
    borderTopWidth: 1,
    margin: '0px 25px 0px 25px'
  }
}








