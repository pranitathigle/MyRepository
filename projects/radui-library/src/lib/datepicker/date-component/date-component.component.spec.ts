import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DartDateComponentComponent } from './-date-component.component';

describe('DartDateComponentComponent', () => {
  let component: DartDateComponentComponent;
  let fixture: ComponentFixture<DartDateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DartDateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DartDateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
