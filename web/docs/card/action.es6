import { Action } from 'panels-blocks';
import ArrowIcon from '../../icons/arrow';
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
          <div style={{alignItems: 'center', flexDirection: 'row'}}>
            <div style={style.fields}>{fields}</div>
            <ArrowIcon fill={style.icon[active ? 'active' : 'base']} />
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
      padding: '15px 15px 15px 25px'
    }
  },
  icon: {
    active: '#7b7b7b',
    base: '#00bd70'
  },
  fields: {
    flexDirection: 'column',
    flex: 1
  }
}
