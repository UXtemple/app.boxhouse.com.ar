import Add from './add';
import Title from './title';
import Delete from './delete';
import Separator from './separator';
import React from 'react';

export default class DocHeader extends React.Component {
  render() {
    return (
      <div style={style.header}>
        <Delete style={style.tool} {...this.props} />
        <Title {...this.props} />
        <Add style={style.tool} {...this.props} />
      </div>
    );
  }
}
const style = {
  header: {
    borderBottom: '1px solid green',
    margin: '0px 25px',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  tool: {
    alignItems: 'center',
    // padding: '25px 0',
    width: '30%'
  }
}
