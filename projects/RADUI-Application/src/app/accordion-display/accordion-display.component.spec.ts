import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDisplayComponent } from './accordion-display.component';

describe('AccordionDisplayComponent', () => {
  let component: AccordionDisplayComponent;
  let fixture: ComponentFixture<AccordionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
