import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {FlashCardsList} from "./FlashCardsList";
import {getVisibleCards} from "./FlashCardAppStore";

export default class VisibleFlashCardsList extends Component {
  componentDidMount() {
    const {store} = this.context;
    this.unsuscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsuscribe();
  }

  render() {
    const {store} = this.context;
    const state = store.getState();
    return (
      <FlashCardsList
        cards={
          getVisibleCards(
            state.cards,
            state.visibilityFilter
          )
        }
        onCardClick={id =>
          store.dispatch({
            type: 'TOGGLE_KNOWN_CARD',
            id
          })
        }
      />
    );
  }
}

// If I forget this, the component will not receive the relevant context
VisibleFlashCardsList.contextTypes = {
  store: PropTypes.object
};