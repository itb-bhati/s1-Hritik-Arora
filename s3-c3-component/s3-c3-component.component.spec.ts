import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3C3ComponentComponent } from './s3-c3-component.component';

describe('S3C3ComponentComponent', () => {
  let component: S3C3ComponentComponent;
  let fixture: ComponentFixture<S3C3ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3C3ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3C3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
