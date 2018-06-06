import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcardDetailComponent } from './fcard-detail.component';

describe('FcardDetailComponent', () => {
  let component: FcardDetailComponent;
  let fixture: ComponentFixture<FcardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
