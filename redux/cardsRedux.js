import initialStoreData from '../src/data/dataStore';
// selectors
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card =>
  card.columnId == columnId); 
export const getSearchCardsForColumn = ({ cards, columns, lists } , searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).map(card => ({
  ...card,
  columnName: columns.find(col => col.id === card.columnid).title,
  listName: lists.find(list => list.id === columns.find(col => col.id === card.columnId).listId).title,
}));
export const countAllCards = ({ cards }) => cards.length;

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');
export const MOVE_CARD = createActionName('MOVE_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: `card-${countAllCards(initialStoreData) + 1}` }, type: ADD_CARD });
export const createAction_moveCard = payload => ({ payload: { ...payload }, type: MOVE_CARD });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    case MOVE_CARD: {

      const {cardId, srcColumn, destColumn} = action.payload;
      let cards = statePart;

      if(srcColumn !== destColumn)
        cards = statePart.map(card => card.id === cardId ? { ...card, columnId: destColumn } : card);

      return cards;
    }

    default:
      return statePart;
  }
}
     