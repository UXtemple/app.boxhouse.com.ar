import docShape from '../shape';
import DocAction from './action';
import DocHeader from './header';
import React from 'react';

export default class DocCard {
  render() {
    const { doc } = this.props;

    return (
      <div style={style.card}>
        <DocHeader doc={doc} />
        <div style={style.separator} />
        <div style={style.actions}>
          <DocAction doc={doc} />
        </div>
      </div>
    );
  }

  static propTypes = {
    doc: docShape.isRequired
  }
}

const style = {
  card: {
    //alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    background: 'white',
    borderRadius: 5,
    padding: '20px 0 15px',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    width: '80%'
  },
  separator: {
    alignSelf: 'center',
    background: 'rgba(0, 189, 112, 0.5)',
    height: 1,
    marginTop: 15,
    width: '85%'
  }
}
