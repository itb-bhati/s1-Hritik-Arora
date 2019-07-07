import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2C6ComponentComponent } from './p2-c6-component.component';

describe('P2C6ComponentComponent', () => {
  let component: P2C6ComponentComponent;
  let fixture: ComponentFixture<P2C6ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2C6ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2C6ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
