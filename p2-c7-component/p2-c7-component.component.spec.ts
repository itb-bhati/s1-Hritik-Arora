import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2C7ComponentComponent } from './p2-c7-component.component';

describe('P2C7ComponentComponent', () => {
  let component: P2C7ComponentComponent;
  let fixture: ComponentFixture<P2C7ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2C7ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2C7ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
