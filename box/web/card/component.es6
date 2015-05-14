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
          <div>
            <div>DELETE</div>
            <div>{this.props.box.full ? 'FULL' : 'FREE'}</div>
            <div>+</div>
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
    backgroundColor: 'green',
    borderRadius: 5,
    color: 'white',
    width: '75%'
  },
  action: {
    base: {
      color: 'white',
      flexDirection: 'column',
      margin: 25,
      padding: 0,
      width: 'auto'
    },
    active: {
    }
  },
  documentCount: {
    number: {
      fontSize: 50
    },
    label: {
      textTransform: 'uppercase'
    }
  },
  position: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: '10px 0 10px 30px',
    width: '100%'
  },
  tools: {
      // flex-direction: row;
      //   align-content: stretch;
      //     text-align: center;
  }
}
