import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RADUILibraryComponent } from './radui-library.component';

describe('RADUILibraryComponent', () => {
  let component: RADUILibraryComponent;
  let fixture: ComponentFixture<RADUILibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RADUILibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RADUILibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
