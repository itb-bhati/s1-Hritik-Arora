import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P2C1ComponentComponent } from './../p2-c1-component/p2-c1-component.component';
import { P2C2ComponentComponent } from './../p2-c2-component/p2-c2-component.component';
import { P2C3ComponentComponent } from './../p2-c3-component/p2-c3-component.component';
import { P2C4ComponentComponent } from './../p2-c4-component/p2-c4-component.component';
import { P2C5ComponentComponent } from './../p2-c5-component/p2-c5-component.component';
import { P2C6ComponentComponent } from './../p2-c6-component/p2-c6-component.component';
import { P2C7ComponentComponent } from './../p2-c7-component/p2-c7-component.component';
import { P2C8ComponentComponent } from './../p2-c8-component/p2-c8-component.component';
import { P2C9ComponentComponent } from './../p2-c9-component/p2-c9-component.component';

@NgModule({
  declarations: [
    P2C1ComponentComponent,
    P2C2ComponentComponent,
    P2C3ComponentComponent,
    P2C4ComponentComponent,
    P2C5ComponentComponent,
    P2C6ComponentComponent,
    P2C7ComponentComponent,
    P2C8ComponentComponent,
    P2C9ComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    P2C1ComponentComponent,
    P2C2ComponentComponent
  ]
})
export class P2PagesModuleModule { }
