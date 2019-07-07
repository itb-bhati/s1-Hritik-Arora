import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3C1ComponentComponent } from './s3-c1-component.component';

describe('S3C1ComponentComponent', () => {
  let component: S3C1ComponentComponent;
  let fixture: ComponentFixture<S3C1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3C1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3C1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
