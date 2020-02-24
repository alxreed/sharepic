import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-compte',
  templateUrl: './modal-compte.component.html',
  styleUrls: ['./modal-compte.component.scss']
})
export class ModalCompteComponent implements OnInit {

  @Output() userCreation = new EventEmitter<any>();

  @Output() cancelAccountForm = new EventEmitter<any>();

  accountForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.accountForm = new FormGroup({
      firstname: new FormControl('', []),
      lastname: new FormControl('', []),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      avatarUrl: new FormControl('', [

      ]),
      description: new FormControl('', [

      ]),
    });
  }

  connectToAccountForm() {
    this.cancelAccountForm.emit(true);
  }

  creation() {
    this.userCreation.emit(this.accountForm.value);
    console.log(this.accountForm.value);

  }

  get email() { return this.accountForm.get('email'); }

  get password() { return this.accountForm.get('password'); }

  get description() { return this.accountForm.get('description'); }
}
