import React from 'react';
import {connect} from "react-redux";
import {addFlashCard} from "../store/FlashCardsActionCreators";

export let AddCard = ({dispatch}) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }}/>
      <button onClick={() => {
        dispatch(addFlashCard(input.value));
        input.value = '';
      }}>
        Add Card
      </button>
    </div>
  );
};
AddCard = connect()(AddCard);

// export const AddCard = (props, {store}) => {
//   let input;
//   return (
//     <div>
//       <input ref={node => {
//         input = node;
//       }}/>
//       <button onClick={() => {
//         store.dispatch({
//           type: 'ADD_CARD',
//           id: todoId++,
//           text: input.value
//         });
//         input.value = '';
//       }}>
//         Add Card
//       </button>
//     </div>
//   );
// };
//
// AddCard.contextTypes = {
//   store: PropTypes.object
// };
