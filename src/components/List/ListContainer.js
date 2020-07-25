import {connect} from 'react-redux';
import List from './List';
import { getColumnsForList } from '../../../redux/columnsRedux.js';
import { createActionAddColumn } from '../../../redux/columnsRedux.js';
import { createAction_moveCard } from '../../../redux/cardsRedux.js';


const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
  moveCard: (id, src, dest) => dispatch(createAction_moveCard({
    cardId: id,
    srcColumn: src,
    destColumn: dest,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);