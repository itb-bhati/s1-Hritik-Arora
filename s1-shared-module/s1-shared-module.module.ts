import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S1C1ComponentComponent } from 'src/app/s1-c1-component/s1-c1-component.component';
import {S1C2ComponentComponent} from 'src/app/s1-c2-component/s1-c2-component.component';

@NgModule({
  declarations: [
    S1C1ComponentComponent,
    S1C2ComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    S1C1ComponentComponent
  ]
})
export class S1SharedModuleModule { }
