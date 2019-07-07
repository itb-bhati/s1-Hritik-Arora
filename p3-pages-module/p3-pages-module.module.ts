import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P3C1ComponentComponent } from './../p3-c1-component/p3-c1-component.component';
import { P3C2ComponentComponent } from './../p3-c2-component/p3-c2-component.component';
import { P3C3ComponentComponent } from './../p3-c3-component/p3-c3-component.component';

@NgModule({
  declarations: [
    P3C1ComponentComponent,
    P3C2ComponentComponent,
    P3C3ComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    P3C1ComponentComponent
  ]
})
export class P3PagesModuleModule { }
