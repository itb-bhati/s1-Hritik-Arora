import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P1C2ComponentComponent } from './p1-c2-component.component';

describe('P1C2ComponentComponent', () => {
  let component: P1C2ComponentComponent;
  let fixture: ComponentFixture<P1C2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P1C2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P1C2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
