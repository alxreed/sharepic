import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() isLogged: boolean;
  @Input() userLogged: any;
  @Output() userLogout = new EventEmitter<any>();
  @Output() userLogin = new EventEmitter<any>();
  @Output() userCreation = new EventEmitter<any>();
  @Output() uploadPicture = new EventEmitter<any>();


  @Output() connexionForm = false;
  @Output() UploadForm = false;
  @Output() accountForm = false;

  constructor() {}

  connectToForm() {
    this.connexionForm = !this.connexionForm;
  }

  connectToUploadForm() {
    this.UploadForm = !this.UploadForm;
  }

  connectToAccountForm() {
    this.accountForm = !this.accountForm;
  }

  onUserLogin(event: any) {
    console.log(event);
    this.userLogin.emit(event);
  }

  logout() {
    this.userLogout.emit(true);
  }

  onUploadPicture(event: any) {
    this.uploadPicture.emit(event);

  }

  onUserCreation(event: any) {
    this.userCreation.emit(event);
  }

  ngOnInit() {
    console.log(this.userLogged);
  }

}
