import { P3PagesModuleModule } from './../p3-pages-module/p3-pages-module.module';
import { P2PagesModuleModule } from './../p2-pages-module/p2-pages-module.module';
import { P1PagesModuleModule } from './../p1-pages-module/p1-pages-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    P1PagesModuleModule,
    P2PagesModuleModule,
    P3PagesModuleModule
  ],
  exports:[
    P1PagesModuleModule,
    P2PagesModuleModule,
    P3PagesModuleModule
  ]
})
export class PagesModuleModule { }
