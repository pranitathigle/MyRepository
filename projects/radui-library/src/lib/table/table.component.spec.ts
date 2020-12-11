import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DartTableComponent } from './-table.component';

describe('DartTableComponent', () => {
  let component: DartTableComponent;
  let fixture: ComponentFixture<DartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
