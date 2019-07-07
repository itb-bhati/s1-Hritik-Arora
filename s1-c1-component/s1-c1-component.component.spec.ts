import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S1C1ComponentComponent } from './s1-c1-component.component';

describe('S1C1ComponentComponent', () => {
  let component: S1C1ComponentComponent;
  let fixture: ComponentFixture<S1C1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S1C1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S1C1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
