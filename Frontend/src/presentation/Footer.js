import React from 'react';
import FilterLink from "../container/FilterLink";

export const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='SHOW_ALL'
    >
      All
    </FilterLink>
    {' '}
    <FilterLink
      filter='SHOW_GENERIC'
    >
      Generic
    </FilterLink>
    {' '}
    <FilterLink
      filter='SHOW_CODE'
    >
      Code
    </FilterLink>
  </p>
);