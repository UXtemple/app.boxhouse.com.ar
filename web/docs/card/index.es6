import docShape from '../shape';
import DocAction from './action';
import DocHeader from './header';
import React from 'react';

export default class DocCard {
  render() {
    const { doc } = this.props;

    return (
      <div style={style.card}>
        <div style={style.gradient.top}>
          <div style={style.tools}>
            <DocHeader doc={doc} />
          </div>
        </div>
        <div style={style.hanger}>
          <div style={style.separator} />
        </div>
        <div style={style.gradient.bottom}>
          <div style={style.actions}>
            <DocAction doc={doc} />
          </div>
        </div>
      </div>
    );
  }

  static propTypes = {
    doc: docShape.isRequired
  }
}

const style = {
  actions: {
    background: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: '80%'
  },
  card: {
    alignItems: 'center',
    marginTop: 25,
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    width: '100%'
  },
  hanger: {
    alignItems: 'center',
    background: 'white',
    height: 10,
    justifyContent: 'center',
    width: '100%'
  },
  gradient: {
    top: {
    flexDirection: 'column',
    alignItems: 'center', 
    background: 'linear-gradient(to bottom, #00bd70, #08A575)',
    width: '100%'
    },
    bottom: {
    flexDirection: 'column',
    alignItems: 'center', 
    background: 'linear-gradient(to top, #00bd70, #08A575)',
    width: '100%'
    }
  },
  tools: {
    background: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: '20px 0 15px',
    width: '80%'
  },
  separator: {
    background: 'rgba(0, 189, 112, 0.5)',
    height: 1,
    width: '70%'
  }
}
