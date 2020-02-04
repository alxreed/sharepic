import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sharepic-header',
  templateUrl: './sharepic-header.component.html',
  styleUrls: ['./sharepic-header.component.scss']
})
export class SharepicHeaderComponent implements OnInit {
  @Input() isLogged: boolean;
  @Input() userLogged: any;
  @Output() userLogin = new EventEmitter<any>();
  @Output() userLogout = new EventEmitter<any>();
  @Output() userCreation = new EventEmitter<any>();
  @Output() uploadPicture = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onUserLogin(event: any) {
    console.log(event);
    this.userLogin.emit(event);
  }

  onUserLogout(event: any) {
    console.log(event);
    this.userLogout.emit(event);
  }

  onUploadPicture(event: any) {
    this.uploadPicture.emit(event);
  }

    onUserCreation(event: any) {
      this.userCreation.emit(event);
    }
}
