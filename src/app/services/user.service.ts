import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userConnected;

  constructor(private db: AngularFirestore) { }

  async addUserInDB(event: { email: any; firstname: any; lastname: any; avatarUrl: any; description: any; }) {
    const id = this.db.createId();
    const timestamp = new Date();
    const user = {
      email: event.email,
      firstname: event.firstname,
      lastname: event.lastname,
      avatarUrl: event.avatarUrl,
      createdAt: timestamp,
      description: event.description,
    };

    await this.db.collection<any>('users').doc(id).set(user);
  }

  getUserByEmail(email: string) {
    // const data = await this.db.collection<any>('users', ref => ref.where('email', '==', email)).valueChanges().toPromise();
    this.db.collection<any>('users', ref => ref.where('email', '==', email)).valueChanges().subscribe((data) => {
      this.userConnected = data[0];
    });

    return this.db.collection<any>('users', ref => ref.where('email', '==', email)).valueChanges();
  }

  setConnectedUser(user) {
    this.userConnected = user;
  }

  getConnectedUser() {
    return this.userConnected;
  }

  getOtherUsers() {
    const otherUsers = [];
    this.db.collection<any>('users').valueChanges().subscribe((data) => {
      data.forEach((user) => {
        otherUsers.push(user);
      });
    });
    return otherUsers;

  }

  getUserWithFullName(fullName: string) {
    const firstname = fullName.split(' ')[0];
    const lastname = fullName.split(' ')[1];

    return this.db.collection<any>('users', ref => ref.where('firstname', '==', firstname)
                                                      .where('lastname', '==', lastname))
                                                      .valueChanges();
  }
}
