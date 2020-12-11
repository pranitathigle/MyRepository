import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaDisplayComponent } from './textarea-display.component';

describe('TextareaDisplayComponent', () => {
  let component: TextareaDisplayComponent;
  let fixture: ComponentFixture<TextareaDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
