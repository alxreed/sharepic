import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private db: AngularFirestore) { }

  getAllConversations(user) {
    console.log(user);

    const member = {
      firstname: user.firstname,
      lastname: user.lastname,
      avatarUrl: user.avatarUrl,
      createdAt: user.createdAt,
      email: user.email,
    };

    console.log(member);


    return this.db.collection('conversations', ref => ref.where('members', 'array-contains', member)).valueChanges();
    return this.db.collection('conversations').valueChanges();
  }
}
