import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sharepic-header',
  templateUrl: './sharepic-header.component.html',
  styleUrls: ['./sharepic-header.component.scss']
})
export class SharepicHeaderComponent implements OnInit {
  @Output() userLogin = new EventEmitter<any>();
  @Output() userLogout = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onUserLogin(event) {
    console.log(event);
    this.userLogin.emit(event);
  }

  onUserLogout(event) {
    console.log(event);
    this.userLogout.emit(event);
  }

}
