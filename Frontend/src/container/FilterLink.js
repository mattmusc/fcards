import {connect} from "react-redux";
import {Link} from "../presentation/Link";
import {setVisibilityFilter} from "../store/FlashCardsActionCreators";

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLinkClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;

// export default class FilterLink extends Component {
//   componentDidMount() {
//     const {store} = this.context;
//     this.unsubscribe = store.subscribe(() =>
//       this.forceUpdate()
//     );
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   render() {
//     const props = this.props;
//     const {store} = this.context;
//     const state = store.getState();
//
//     return (
//       <Link
//         active={
//           props.filter ===
//           state.visibilityFilter
//         }
//         onLinkClick={() => {
//           store.dispatch({
//             type: 'SET_VISIBILITY_FILTER',
//             filter: props.filter
//           })
//         }}
//       >
//         {props.children}
//       </Link>
//     );
//   }
// }
//
// FilterLink.contextTypes = {
//   store: PropTypes.object
// };
