import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S1C2ComponentComponent } from './s1-c2-component.component';

describe('S1C2ComponentComponent', () => {
  let component: S1C2ComponentComponent;
  let fixture: ComponentFixture<S1C2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S1C2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S1C2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
