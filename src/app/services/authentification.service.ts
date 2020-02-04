import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string) {
    console.log(this.afAuth.user);
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  isLogged() {
    return this.afAuth.user;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  creation(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
