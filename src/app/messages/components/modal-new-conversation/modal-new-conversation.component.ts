import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-new-conversation',
  templateUrl: './modal-new-conversation.component.html',
  styleUrls: ['./modal-new-conversation.component.scss']
})
export class ModalNewConversationComponent implements OnInit {
  @Output() cancelConversation = new EventEmitter<any>();
  @Input() otherUsers;
  @Input() userCo;
  conversationForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.conversationForm = new FormGroup({
      friends: new FormArray([
        new FormControl(''),
      ]),
    });
    this.otherUsers = this.getOtherUsers();
  }

  get friends() { return this.conversationForm.get('friends') as FormArray; }

  addfriend() {
    this.friends.push(new FormControl(''));
  }

  removeFriend(friendIndex) {
    this.friends.removeAt(friendIndex);
  }

  cancelNewConversation() {
    this.cancelConversation.emit(true);
  }

  getOtherUsers() {
    const usersToReturn = [];
    this.otherUsers.forEach((user) => {
      if (user.email !== this.userCo.email) {
        usersToReturn.push(user);
      }
    });
    return usersToReturn;
  }

  sendNewConversation() {
    console.log(this.conversationForm);

  }

}
