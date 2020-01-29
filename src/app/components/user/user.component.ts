import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() isLogged: boolean;
  @Output() userLogout = new EventEmitter<any>();
  @Output() userLogin = new EventEmitter<any>();


  @Output() connexionForm = false;

  constructor() {}

  connectToForm() {
    this.connexionForm = !this.connexionForm;
  }

  onUserLogin(event: any) {
    console.log(event);
    this.userLogin.emit(event);
  }

  logout() {
    this.userLogout.emit(true);
  }

  ngOnInit() {
  }

}
