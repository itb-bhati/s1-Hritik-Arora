import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3C2ComponentComponent } from './s3-c2-component.component';

describe('S3C2ComponentComponent', () => {
  let component: S3C2ComponentComponent;
  let fixture: ComponentFixture<S3C2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3C2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3C2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
