import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaduiFormGeneratorComponent } from './radui-form-generator.component';

describe('RaduiFormGeneratorComponent', () => {
  let component: RaduiFormGeneratorComponent;
  let fixture: ComponentFixture<RaduiFormGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaduiFormGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaduiFormGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
