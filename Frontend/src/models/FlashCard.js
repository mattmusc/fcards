import React from 'react';

export const FlashCard = ({onClick, title}) => (
  <li onClick={onClick}
  > {title}
  </li>
);

