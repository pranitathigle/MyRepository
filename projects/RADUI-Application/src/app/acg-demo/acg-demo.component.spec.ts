import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcgDemoComponent } from './acg-demo.component';

describe('AcgDemoComponent', () => {
  let component: AcgDemoComponent;
  let fixture: ComponentFixture<AcgDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcgDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcgDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
