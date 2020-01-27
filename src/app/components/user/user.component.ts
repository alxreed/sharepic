import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Output() userLogin = new EventEmitter<any>();
  @Output() userLogout = new EventEmitter<any>();

  constructor() {}
  // constructor(public afAuth: AngularFireAuth) {}

  login() {
    this.userLogin.emit(true);
  }

  logout() {
    this.userLogout.emit(true);
  }


  // login() {
  //   this.afAuth.auth.signInWithEmailAndPassword('toto@toto.fr', 'toto1234');
  // }



  ngOnInit() {
  }

}
