import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3C4ComponentComponent } from './s3-c4-component.component';

describe('S3C4ComponentComponent', () => {
  let component: S3C4ComponentComponent;
  let fixture: ComponentFixture<S3C4ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3C4ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3C4ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
