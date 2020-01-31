import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private db: AngularFirestore) {

  }

  getPopularPictures() {
    return this.db.collection<any>('pictures').snapshotChanges().pipe(
      map(pictures => pictures.map(picture => {
        const data = picture.payload.doc.data();
        const id = picture.payload.doc.id;
        return {...data, id};
      }))
    );
  }

  getPictureById(id: string){
    return this.db.doc<any>(`pictures/${id}`).valueChanges();
  }
}
