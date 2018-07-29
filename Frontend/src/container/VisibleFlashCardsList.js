import {connect} from 'react-redux';

import {FlashCardsList} from "../presentation/FlashCardsList";
import {getVisibleCards} from "../store/FlashCardAppStore";
import {toggleKnownCard} from "../store/FlashCardsActionCreators";

const mapStateToProps = (state) => {
  return {
    cards: getVisibleCards(
      state.cards,
      state.visibilityFilter
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (id) => {
      dispatch(toggleKnownCard(id))
    }
  };
};

const VisibleFlashCardsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashCardsList);

export default VisibleFlashCardsList;

//
// The call to connect above generates all the code below
//
// export default class VisibleFlashCardsList extends Component {
//   componentDidMount() {
//     const {store} = this.context;
//     this.unsuscribe = store.subscribe(() => {
//       this.forceUpdate();
//     });
//   }
//
//   componentWillUnmount() {
//     this.unsuscribe();
//   }
//
//   render() {
//     const {store} = this.context;
//     const state = store.getState();
//     return (
//       <FlashCardsList
//         cards={
//           getVisibleCards(
//             state.cards,
//             state.visibilityFilter
//           )
//         }
//         onCardClick={id =>
//           store.dispatch({
//             type: 'TOGGLE_KNOWN_CARD',
//             id
//           })
//         }
//       />
//     );
//   }
// }
//
// // If I forget this, the component will not receive the relevant context
// VisibleFlashCardsList.contextTypes = {
//   store: PropTypes.object
// };