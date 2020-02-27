import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(
    private db: AngularFirestore,
    private userService: UserService,
    ) { }

  getAllConversations(user) {
    return this.db.collection('conversations', ref => ref.where('members', 'array-contains', {email: user.email})).valueChanges();
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

  getOthersMembers(members: any[], userLogged) {
    return members.filter( member => member.email !== userLogged.email);
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
