import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P3C3ComponentComponent } from './p3-c3-component.component';

describe('P3C3ComponentComponent', () => {
  let component: P3C3ComponentComponent;
  let fixture: ComponentFixture<P3C3ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P3C3ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P3C3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
