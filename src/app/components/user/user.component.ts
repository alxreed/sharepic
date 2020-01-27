import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) {}

  login() {
    this.afAuth.auth.signInWithEmailAndPassword('toto@toto.fr', 'toto1234');
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
