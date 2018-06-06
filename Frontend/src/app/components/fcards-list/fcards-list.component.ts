import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { FlashCardsApiService } from '../../service/flash-cards-api.service';
import {FlashCard} from '../../models/FlashCard';

@Component({
  selector: 'app-fcards-list',
  templateUrl: './fcards-list.component.html',
  styleUrls: ['./fcards-list.component.scss'],
  providers: [FlashCardsApiService]
})
export class FcardsListComponent implements  OnInit {
  selectedCard: FlashCard;

  cards: FlashCard[];

  constructor(private fCardsService: FlashCardsApiService) { }

  ngOnInit() {
    this.getCards();
  }

  onSelect(card: FlashCard): void {
    this.selectedCard = card;
  }

  getCards(): void {
    this.fCardsService.getCards()
      .subscribe(cards => this.cards = cards);
  }
}
