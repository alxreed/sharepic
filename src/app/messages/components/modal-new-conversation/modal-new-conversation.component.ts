import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-new-conversation',
  templateUrl: './modal-new-conversation.component.html',
  styleUrls: ['./modal-new-conversation.component.scss']
})
export class ModalNewConversationComponent implements OnInit {
  @Output() cancelConversation = new EventEmitter<any>();
  @Output() newConversation = new EventEmitter<any>();
  @Input() otherUsers;
  @Input() userCo;
  conversationForm: FormGroup;
  addedFriend;

  constructor() { }

  ngOnInit() {
    this.conversationForm = new FormGroup({
      friends: new FormArray([
        new FormControl('', [Validators.required]),
      ]),
      conversationName: new FormControl(''),
      conversationAvatarUrl: new FormControl('')
    });
    this.otherUsers = this.getOtherUsers();
    this.addedFriend = [];
  }

  get friends() { return this.conversationForm.get('friends') as FormArray; }

  get conversationName() { return this.conversationForm.get('conversationName'); }

  get conversationAvatarUrl() { return this.conversationForm.get('conversationAvatarUrl'); }

  addfriend() {
    this.friends.push(new FormControl('', [Validators.required]));
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
    const data = {
      name: this.conversationForm.value.conversationName,
      convAvatar: this.conversationForm.value.conversationAvatarUrl,
      members: this.addedFriend,
    };
    this.newConversation.emit(data);
    this.cancelNewConversation();
  }

  addThisFriend(user) {
    const fullName = `${user.firstname} ${user.lastname}`;
    this.addedFriend.push(fullName);
  }

}
