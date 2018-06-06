import { TestBed, inject } from '@angular/core/testing';

import { FlashCardsApiService } from './flash-cards-api.service';

describe('FlashCardsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlashCardsApiService]
    });
  });

  it('should be created', inject([FlashCardsApiService], (service: FlashCardsApiService) => {
    expect(service).toBeTruthy();
  }));
});
