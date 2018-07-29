let cardId = 0;

const addFlashCard = (title) => {
  return {
    type: 'ADD_CARD',
    id: cardId++,
    title
  };
};

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

const toggleKnownCard = (id) => {
  return {
    type: 'TOGGLE_KNOWN_CARD',
    id
  };
};

export {addFlashCard, setVisibilityFilter, toggleKnownCard};
