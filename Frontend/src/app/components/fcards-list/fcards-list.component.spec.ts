import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcardsListComponent } from './fcards-list.component';

describe('FcardsListComponent', () => {
  let component: FcardsListComponent;
  let fixture: ComponentFixture<FcardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
