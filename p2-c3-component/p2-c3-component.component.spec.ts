import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2C3ComponentComponent } from './p2-c3-component.component';

describe('P2C3ComponentComponent', () => {
  let component: P2C3ComponentComponent;
  let fixture: ComponentFixture<P2C3ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2C3ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2C3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
