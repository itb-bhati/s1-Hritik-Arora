import { S3SharedModuleModule } from './../s3-shared-module/s3-shared-module.module';
import { S2SharedModuleModule } from './../s2-shared-module/s2-shared-module.module';
import { S1SharedModuleModule } from './../s1-shared-module/s1-shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    S1SharedModuleModule,
    S2SharedModuleModule,
    S3SharedModuleModule
  ],
  exports:[
    S1SharedModuleModule,
    S3SharedModuleModule
  ]
})
export class SharedModuleModule { }
