import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P1C1ComponentComponent } from './../p1-c1-component/p1-c1-component.component';
import { P1C2ComponentComponent } from './../p1-c2-component/p1-c2-component.component';
import { P1C3ComponentComponent } from './../p1-c3-component/p1-c3-component.component';
import { P1C4ComponentComponent } from './../p1-c4-component/p1-c4-component.component';
import { P1C5ComponentComponent } from './../p1-c5-component/p1-c5-component.component';
import { P1C6ComponentComponent } from './../p1-c6-component/p1-c6-component.component';
import { P2C2ComponentComponent } from '../p2-c2-component/p2-c2-component.component';

@NgModule({
  declarations: [
    P1C1ComponentComponent,
    P1C2ComponentComponent,
    P1C3ComponentComponent,
    P1C4ComponentComponent,
    P1C5ComponentComponent,
    P1C6ComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    P1C1ComponentComponent,
    P1C2ComponentComponent
  ]
})
export class P1PagesModuleModule { }
