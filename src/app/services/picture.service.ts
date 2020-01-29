import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  private imageCollection: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {

  }

  getPopularPictures() {
    return this.db.collection<any>('pictures').valueChanges();
  }
}
