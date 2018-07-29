import React from 'react';

import {AddCard} from "./AddCard";
import {Footer} from "./Footer";
import VisibleFlashCardsList from "./VisibleFlashCardsList";

export const FlashCardApp = () => (
  <div>
    <AddCard/>
    <VisibleFlashCardsList/>
    <Footer/>
  </div>
);