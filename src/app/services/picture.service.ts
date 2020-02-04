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
        return { ...data, id };
      }))
    );
  }

  getPictureById(id: string) {
    return this.db.doc<any>(`pictures/${id}`).valueChanges();
  }

  async addPictureInDB(event, pictureUrl, user) {
    const timestamp = new Date();
    const picture = {
      author: {
        avatarUrl: user.avatarUrl,
        firstname: user.firstname,
        lastname: user.lastname,
      },
      createdAt: timestamp,
      description: event.description,
      editorChoice: false,
      likes: {
        count: 0,
        likers: [],
      },
      rating: 9,
      src: pictureUrl,
      title: event.title,
    };

    await this.db.collection<any>('pictures').add(picture);
  }
}
