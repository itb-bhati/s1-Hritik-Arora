import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2C1ComponentComponent } from './p2-c1-component.component';

describe('P2C1ComponentComponent', () => {
  let component: P2C1ComponentComponent;
  let fixture: ComponentFixture<P2C1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2C1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2C1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
