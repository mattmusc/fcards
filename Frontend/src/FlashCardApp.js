import React from 'react';

import {AddCard} from "./presentation/AddCard";
import {Footer} from "./presentation/Footer";
import VisibleFlashCardsList from "./container/VisibleFlashCardsList";

export const FlashCardApp = () => (
  <div>
    <AddCard/>
    <VisibleFlashCardsList/>
    <Footer/>
  </div>
);