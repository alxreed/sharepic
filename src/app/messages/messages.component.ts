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

  constructor(
    private conversationService: ConversationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.getConnectedUser();
    console.log(this.user);
    
    this.conversationService.getAllConversations(this.user).subscribe((data) => {
      console.log(data);
    });
  }

}
