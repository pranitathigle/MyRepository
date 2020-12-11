import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateButtonsComponent } from './date-buttons.component';

describe('DartDateButtonsComponent', () => {
  let component: DateButtonsComponent;
  let fixture: ComponentFixture<DateButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
