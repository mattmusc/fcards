import React from 'react';
import {FlashCard} from "./FlashCard";

export const FlashCardsList = ({cards, onCardClick}) => (
  <ul>
    {cards.map(card =>
      <FlashCard
        key={card.id}
        {...card}
        onClick={onCardClick}
      />
    )}
  </ul>
);