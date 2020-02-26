import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.lastMessage = this.getLastMessage(this.conversation);
    this.time = this.getLastTime(this.lastMessage);
    this.members = this.getOthersMembers(this.conversation.members);
    this.fullUsers = this.getFullUser(this.members);
  }

  getLastMessage(conversation: { messages: any; }) {
    const messages = conversation.messages;
    let last = messages[messages.length - 1];
    for (const message of conversation.messages) {
      if (message.createdAt > last.createdAt) {
        last = message;
      }
    }
    return last;
  }

  getLastTime(message: { createdAt: { toDate: () => any; }; }) {
    const totalSeconds = message.createdAt.toDate();
    const hours = totalSeconds.getHours();
    const minutes = totalSeconds.getMinutes();
    return `${hours}:${minutes}`;
  }

  getOthersMembers(members: any[]) {
    return members.filter( member => member.email !== this.userLogged.email);
  }

  getFullUser(members) {
    const otherMembers = [];
    members.forEach((member) => {
      const user = this.userService.getUserByEmail(member.email);
      user.subscribe(data => otherMembers.push(data[0]));
    });
    return otherMembers;
  }

}
