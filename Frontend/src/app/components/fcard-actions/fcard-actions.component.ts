import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fcard-actions',
  templateUrl: './fcard-actions.component.html',
  styleUrls: ['./fcard-actions.component.scss']
})
export class FcardActionsComponent implements OnInit {
  @Input() id: number;

  editButtonText = 'Edit';

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
