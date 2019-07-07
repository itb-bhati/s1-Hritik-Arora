import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P1C6ComponentComponent } from './p1-c6-component.component';

describe('P1C6ComponentComponent', () => {
  let component: P1C6ComponentComponent;
  let fixture: ComponentFixture<P1C6ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P1C6ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P1C6ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
