import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private db: AngularFirestore) { }

  getAllConversations(user) {
    console.log(user);

    return this.db.collection('conversations', ref => ref.where('members', 'array-contains', {email: user.email})).valueChanges();
  }
}
