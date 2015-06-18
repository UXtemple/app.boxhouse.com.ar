import { ActionIconBlock } from 'panels-ui/blocks';
import ArrowIcon from '../../../icons/arrow';
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
      <ActionIconBlock href={this.props.doc.id} style={style.action} panels={this.props.panels} icon={ArrowIcon}>
        <div style={style.fields}>{fields}</div>
      </ActionIconBlock>
    );
  }
}

const style = {
  action: {
    action: {
      active: {},
      base: {
        alignItems: 'center',
        padding: '15px 15px 15px 25px'
      }
    },
    icon: {
      active: {
        fill: '#323232'
      },
      base: {
        fill: '#323232'
      }
    }
  },
  fields: {
    flexDirection: 'column',
    flex: 1
  }
}
