import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SharepicHeaderComponent } from '../components/sharepic-header/sharepic-header.component';
import { UserComponent } from '../components/user/user.component';
import { SearchComponent } from '../components/search/search.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SharepicHeaderComponent,
    UserComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'sharepic'),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
