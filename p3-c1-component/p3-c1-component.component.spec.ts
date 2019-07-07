import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P3C1ComponentComponent } from './p3-c1-component.component';

describe('P3C1ComponentComponent', () => {
  let component: P3C1ComponentComponent;
  let fixture: ComponentFixture<P3C1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P3C1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P3C1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
