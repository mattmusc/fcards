import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcardActionsComponent } from './fcard-actions.component';

describe('FcardActionsComponent', () => {
  let component: FcardActionsComponent;
  let fixture: ComponentFixture<FcardActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcardActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
