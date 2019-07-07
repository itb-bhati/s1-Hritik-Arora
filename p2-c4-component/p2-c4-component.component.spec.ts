import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2C4ComponentComponent } from './p2-c4-component.component';

describe('P2C4ComponentComponent', () => {
  let component: P2C4ComponentComponent;
  let fixture: ComponentFixture<P2C4ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2C4ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2C4ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
