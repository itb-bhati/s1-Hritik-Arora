import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P1C3ComponentComponent } from './p1-c3-component.component';

describe('P1C3ComponentComponent', () => {
  let component: P1C3ComponentComponent;
  let fixture: ComponentFixture<P1C3ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P1C3ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P1C3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
