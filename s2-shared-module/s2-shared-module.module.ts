import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S2C1ComponentComponent } from './../s2-c1-component/s2-c1-component.component';

@NgModule({
  declarations: [
    S2C1ComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    //S2C1ComponentComponent
  ]
})
export class S2SharedModuleModule { }
