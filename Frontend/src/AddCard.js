import React from 'react';
import PropTypes from "prop-types";

let todoId = 0;
export const AddCard = (props, {store}) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }}/>
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_CARD',
          id: todoId++,
          text: input.value
        });
        input.value = '';
      }}>
        Add Card
      </button>
    </div>
  );
};

AddCard.contextTypes = {
  store: PropTypes.object
};
