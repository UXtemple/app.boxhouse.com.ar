import { actions } from '../../boxes';
import { actions as docActions } from '../../docs';
import { connect } from 'redux/react';
import { Panel } from 'panels-ui';
import { listForCompany } from '../../boxes/getters';
import boxShape from './shape';
import companyShape from '../company/shape';
import CompanyProfileCard from '../companies/profile/card';
import List from './list';
import React, { PropTypes } from 'react';
import Tools from './tools';

@connect((state, {companyId}) => ({
  boxes: listForCompany(state.boxes, companyId),
  company: state.companies[companyId]
}))
export default class Boxes {
  render() {
    const { boxes, company, dispatch, width } = this.props;
    const addBox = () => dispatch(actions.add({companyId: company.id}));
    const addDoc = boxId => () => dispatch(docActions.add({boxId}));
    const removeBox = id => () => dispatch(actions.remove(id));
    const toggleBoxFull = id => () => dispatch(actions.toggleBoxFull(id));

    return (
      <Panel style={style} width={width}>
        <CompanyProfileCard company={company} />
        <Tools add={addBox} />
        <List addDoc={addDoc} boxes={boxes} removeBox={removeBox} toggleBoxFull={toggleBoxFull} />
      </Panel>
    );
  }

  static propTypes = {
    boxes: PropTypes.arrayOf(boxShape).isRequired,
    company: companyShape.isRequired,
    companyId: PropTypes.string.isRequired
  }
}

const style = {
  backgroundColor: '#F7E4BF',
  paddingBottom: 100
};
