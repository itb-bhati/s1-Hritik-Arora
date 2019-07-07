import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P3C2ComponentComponent } from './p3-c2-component.component';

describe('P3C2ComponentComponent', () => {
  let component: P3C2ComponentComponent;
  let fixture: ComponentFixture<P3C2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P3C2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P3C2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
