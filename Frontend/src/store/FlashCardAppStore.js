import {combineReducers} from "redux";

const flashCard = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        id: action.id,
        title: action.title,
        description: action.description,
        type: action.type,
        known: false
      };
    case 'TOGGLE_KNOWN_CARD':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        known: !state.known
      };
    default:
      return state;
  }
};

const flashCards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        flashCard(undefined, action)
      ];
    case 'TOGGLE_KNOWN_CARD':
      return state.map(fc => flashCard(fc));
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const getVisibleCards = (cards, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return cards;
    case 'SHOW_GENERAL':
      return cards.filter(c => c.type === 'general');
    case 'SHOW_CODE':
      return cards.filter(c => c.type === 'code');
    default:
      return cards;
  }
};

const flashCardAppStore = combineReducers({
  // ES6 object literal shortcut
  cards: flashCards,
  visibilityFilter
});

export {flashCardAppStore, getVisibleCards};
