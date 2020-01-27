import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharepicHeaderComponent } from '../components/sharepic-header/sharepic-header.component';
import { SharepicHomeComponent } from '../sharepic-home/sharepic-home.component';
import { DiscoveryHeaderComponent } from '../sharepic-home/components/discovery-header/discovery-header.component';
import { TabNavigationComponent } from '../sharepic-home/components/tab-navigation/tab-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SharepicHeaderComponent,
    SharepicHomeComponent,
    DiscoveryHeaderComponent,
    TabNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
