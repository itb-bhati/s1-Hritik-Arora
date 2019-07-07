import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2C9ComponentComponent } from './p2-c9-component.component';

describe('P2C9ComponentComponent', () => {
  let component: P2C9ComponentComponent;
  let fixture: ComponentFixture<P2C9ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2C9ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2C9ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
