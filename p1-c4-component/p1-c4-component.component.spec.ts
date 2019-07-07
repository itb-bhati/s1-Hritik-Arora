import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P1C4ComponentComponent } from './p1-c4-component.component';

describe('P1C4ComponentComponent', () => {
  let component: P1C4ComponentComponent;
  let fixture: ComponentFixture<P1C4ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P1C4ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P1C4ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
