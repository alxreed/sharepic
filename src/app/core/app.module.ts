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
import { AuthentificationService } from '../services/authentification.service';
import { ModalConnexionComponent } from '../components/modal-connexion/modal-connexion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SharepicHeaderComponent,
    UserComponent,
    SearchComponent,
    ModalConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'sharepic'),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
