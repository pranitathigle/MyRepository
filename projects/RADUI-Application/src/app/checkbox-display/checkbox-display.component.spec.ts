import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDisplayComponent } from './checkbox-display.component';

describe('CheckboxDisplayComponent', () => {
  let component: CheckboxDisplayComponent;
  let fixture: ComponentFixture<CheckboxDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
