import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharepicHeaderComponent } from '../components/sharepic-header/sharepic-header.component';
import { UserComponent } from '../components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SharepicHeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
