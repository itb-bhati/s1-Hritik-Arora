import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S3C1ComponentComponent } from './../s3-c1-component/s3-c1-component.component';
import { S3C2ComponentComponent } from './../s3-c2-component/s3-c2-component.component';
import { S3C3ComponentComponent } from './../s3-c3-component/s3-c3-component.component';
import { S3C4ComponentComponent } from './../s3-c4-component/s3-c4-component.component';

@NgModule({
  declarations: [
    S3C1ComponentComponent,
    S3C2ComponentComponent,
    S3C3ComponentComponent,
    S3C4ComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    S3C1ComponentComponent
  ]
})
export class S3SharedModuleModule { }
