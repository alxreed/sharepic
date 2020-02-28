import { Component, OnInit, Output } from '@angular/core';
import { ConversationService } from '../services/conversation.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  user: any;
  conversations: any;
  conversationsArray: any;

  conversationForm = false;

  otherUsers;

  constructor(
    private conversationService: ConversationService,
    private userService: UserService
  ) {
    this.conversations = [];
  }

  ngOnInit() {
    this.user = this.userService.getConnectedUser() ? this.userService.getConnectedUser() : null;
    if (this.user) {
      this.conversationService.getAllConversations(this.user).subscribe((data) => {
        this.conversations.push(data[0]);
      });
      this.conversationsArray = this.conversations ? this.conversations : [];
    }
    this.otherUsers = this.userService.getOtherUsers();
  }

  cancelConversationForm() {
    this.conversationForm = !this.conversationForm;
  }

  onNewConversation(event) {
    console.log(event);
    const fullMembers = [];
    event.members.forEach((member) => {
      this.userService.getUserWithFullName(member).subscribe((data) => {
        fullMembers.push({email: data[0].email});
      });
    });

    this.conversationService.addConversation(event, fullMembers, this.user.email);

  }
}
