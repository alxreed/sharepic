import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  addUserInDB(event: { email: any; firstname: any; lastname: any; avatarUrl: any; }) {
    this.db.collection<any>('users').add({
      email: event.email,
      firstname: event.firstname,
      lastname: event.lastname,
      avatarUrl: event.avatarUrl,
    });
  }
}
