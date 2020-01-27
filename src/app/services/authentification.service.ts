import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private afAuth: AngularFireAuth) { }

  login() {
    console.log('Login Service');
    this.afAuth.auth.signInWithEmailAndPassword('toto@toto.fr', 'toto1234');
  }

  isLogged() {
    return this.afAuth.user;
  }

  logout() {
    console.log('Logout Service');
    this.afAuth.auth.signOut();
  }
}
