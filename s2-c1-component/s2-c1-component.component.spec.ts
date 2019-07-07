import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2C1ComponentComponent } from './s2-c1-component.component';

describe('S2C1ComponentComponent', () => {
  let component: S2C1ComponentComponent;
  let fixture: ComponentFixture<S2C1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2C1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2C1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
