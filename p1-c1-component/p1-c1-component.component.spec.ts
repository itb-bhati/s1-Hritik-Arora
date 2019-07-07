import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P1C1ComponentComponent } from './p1-c1-component.component';

describe('P1C1ComponentComponent', () => {
  let component: P1C1ComponentComponent;
  let fixture: ComponentFixture<P1C1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P1C1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P1C1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
