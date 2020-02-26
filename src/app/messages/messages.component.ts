import { Component, OnInit } from '@angular/core';
import { ConversationService } from '../services/conversation.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  user: any;
  conversations: any;
  conversationsArray: any;

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

  }
}
