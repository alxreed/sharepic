import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email, password) {
    console.log('Login Service');
    console.log(this.afAuth.user);
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  isLogged() {
    return this.afAuth.user;
  }

  logout() {
    console.log('Logout Service');
    this.afAuth.auth.signOut();
  }
}
