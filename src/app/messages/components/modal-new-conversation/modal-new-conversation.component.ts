import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-new-conversation',
  templateUrl: './modal-new-conversation.component.html',
  styleUrls: ['./modal-new-conversation.component.scss']
})
export class ModalNewConversationComponent implements OnInit {
  @Output() cancelConversation = new EventEmitter<any>();
  conversationForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.conversationForm = new FormGroup({
      friends: new FormArray([
        new FormControl(''),
      ]),
    });
  }

  get friends() { return this.conversationForm.get('friends') as FormArray; }

  addfriend() {
    this.friends.push(new FormControl(''));
    console.log(this.conversationForm);

  }

  cancelNewConversation() {
    this.cancelConversation.emit(true);
  }

}
