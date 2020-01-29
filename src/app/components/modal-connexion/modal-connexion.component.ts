import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-connexion',
  templateUrl: './modal-connexion.component.html',
  styleUrls: ['./modal-connexion.component.scss']
})
export class ModalConnexionComponent implements OnInit {


  constructor() { }
  @Output() userLogin = new EventEmitter<any>();

  @Output() cancelConnexionForm = new EventEmitter<any>();


  profileForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl(''),
  });

  login() {
    this.userLogin.emit(this.profileForm.value);
    console.log(this.profileForm.value);
  }

  connectToForm() {
    this.cancelConnexionForm.emit(true);
  }

  ngOnInit() {
  }

}
