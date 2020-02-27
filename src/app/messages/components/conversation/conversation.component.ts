import { Component, OnInit, Input } from '@angular/core';
import { ConversationService } from 'src/app/services/conversation.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  @Input() conversation: any;
  @Input() userLogged: any;
  lastMessage: any;
  time: any;
  members: any;
  fullUsers: any;

  constructor(
    private conversationService: ConversationService,
  ) { }

  ngOnInit() {
    this.lastMessage = this.conversationService.getLastMessage(this.conversation);
    this.time = this.conversationService.getLastTime(this.lastMessage);
    this.members = this.conversationService.getOthersMembers(this.conversation.members, this.userLogged);
    this.fullUsers = this.conversationService.getFullUser(this.members);
  }
}
