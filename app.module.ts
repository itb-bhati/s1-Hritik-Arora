import { PagesModuleModule } from './pages-module/pages-module.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    PagesModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
