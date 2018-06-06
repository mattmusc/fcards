import {Component, Input, OnInit} from '@angular/core';
import {FlashCard} from '../../models/FlashCard';

@Component({
  selector: 'app-fcard-detail-component',
  templateUrl: './fcard-detail.component.html',
  styleUrls: ['./fcard-detail.component.scss']
})
export class FcardDetailComponent implements OnInit {

  @Input() card: FlashCard;

  constructor() { }

  ngOnInit() {
  }

}
