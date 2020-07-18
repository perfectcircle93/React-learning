import {connect} from 'react-redux';
import Column from './Column.js';
import { getCardsForColumn } from '../../../redux/cardsRedux.js';
import { createActionAddCard } from '../../../redux/cardsRedux.js';

export const getCardsForColumns = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});


export default connect(mapStateToProps, mapDispatchToProps)(Column);