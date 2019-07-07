import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2C8ComponentComponent } from './p2-c8-component.component';

describe('P2C8ComponentComponent', () => {
  let component: P2C8ComponentComponent;
  let fixture: ComponentFixture<P2C8ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2C8ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2C8ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
