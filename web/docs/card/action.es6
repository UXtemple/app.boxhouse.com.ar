import { Action } from 'panels-blocks';
import Field from '../field';
import React from 'react';

export default class DocAction extends React.Component {
  render() {
    const { doc } = this.props;

    const fields = [{
      disabled: true,
      label: 'Type',
      value: doc.type
    }, {
      disabled: true,
      label: 'Number range',
      value: `${doc.number.from} - ${doc.number.to}`
    }].map((field, i) => <Field key={i} {...field} style={i !== 0 ? {marginTop: 20} : {}}/>);

    return (
      <Action href={doc.id} style={style.action}>
        {active => (
          <div style={style.wrapper}>
            <div style={style.fields}>{fields}</div>
            <div style={style.button}>SHOW ALL</div>
          </div>
        )}
      </Action>
    );
  }
}

const style = {
  action: {
    active: {},
    base: {
      alignItems: 'center',
      padding: '20px 25px 10px 25px'
    }
  }, 
  button: {
    alignSelf: 'center',
    color: 'rgb(0, 189, 112)',
    background: 'none',
    borderColor: 'rgb(0, 189, 112)',
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 2,
    fontSize: 12,
    fontWeight: 400,
    height: 30,
    marginTop: 20,
    padding: '4px 0',
    textAlign: 'center',
    width: 100
  },
  fields: {
    flexDirection: 'column',
    flex: 1
  },
  wrapper: {
    width: '100%'
  }
}
