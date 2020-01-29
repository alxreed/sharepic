import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-connexion',
  templateUrl: './modal-connexion.component.html',
  styleUrls: ['./modal-connexion.component.scss']
})
export class ModalConnexionComponent implements OnInit {


  constructor() { }

  @Output() userLogin = new EventEmitter<any>();

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    this.userLogin.emit(true);
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  ngOnInit() {
  }

}
