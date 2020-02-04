import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userConnected;

  constructor(private db: AngularFirestore) { }

  async addUserInDB(event: { email: any; firstname: any; lastname: any; avatarUrl: any; }) {
    const id = this.db.createId();
    const timestamp = {
      seconds: new Date().getSeconds(),
      nanoseconds: 0
    };
    const user = {
      email: event.email,
      firstname: event.firstname,
      lastname: event.lastname,
      avatarUrl: event.avatarUrl,
      createdAt: timestamp,
    };

    await this.db.collection<any>('users').doc(id).set(user);
  }

  getUserByEmail(email: string) {
    // const data = await this.db.collection<any>('users', ref => ref.where('email', '==', email)).valueChanges().toPromise();
    return this.db.collection<any>('users', ref => ref.where('email', '==', email)).valueChanges();
  }

  setConnectedUser(user) {
    this.userConnected = user;
  }

  getConnectedUser() {
    return this.userConnected;
  }
}