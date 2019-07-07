import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2C2ComponentComponent } from './p2-c2-component.component';

describe('P2C2ComponentComponent', () => {
  let component: P2C2ComponentComponent;
  let fixture: ComponentFixture<P2C2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2C2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2C2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
