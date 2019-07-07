import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P1C5ComponentComponent } from './p1-c5-component.component';

describe('P1C5ComponentComponent', () => {
  let component: P1C5ComponentComponent;
  let fixture: ComponentFixture<P1C5ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P1C5ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P1C5ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
