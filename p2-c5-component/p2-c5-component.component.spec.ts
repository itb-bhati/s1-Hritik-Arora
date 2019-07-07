import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2C5ComponentComponent } from './p2-c5-component.component';

describe('P2C5ComponentComponent', () => {
  let component: P2C5ComponentComponent;
  let fixture: ComponentFixture<P2C5ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2C5ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2C5ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
