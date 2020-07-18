import shortid from 'shortid';

// selectors
export const getSearchString = ({ searchString }) => searchString;

export const countAllCards = ({ cards }) => cards.length;

export const countVisibleCards = ({ cards, searchString }) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

