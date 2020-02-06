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

  async getPictureId(event) {
    const collection = await this.db.collection<any>('pictures', ref => ref.where('title', '==', event.title)).get().toPromise();
    return collection.docs[0].id;
  }

  async likePicture(user, picture, pictureId) {
    const likers = picture.likes.likers;
    let count = picture.likes.count;
    let isPictureLiked: boolean;
    const emails: any[] = [];

    for (const liker of likers) {
      emails.push(liker.email);
    }

    if (emails.includes(user.email)) {
      for (const liker of likers) {
        if (liker.email === user.email) {
          likers.splice(liker, 1);
        }
      }
      count--;
      isPictureLiked = false;
    } else {
      likers.push(user);
      count++;
      isPictureLiked = true;
    }

    const likes = {
      count: count,
      likers: likers,
    };
    console.log(picture);


    const doc = this.db.doc(`pictures/${pictureId}`);
    // tslint:disable-next-line: object-literal-shorthand
    doc.update({ likes: likes });

    return isPictureLiked;

  }

}



// async addCommentInDB(event, pictureId, user) {
//   const timestamp = new Date();
//   const comment = {
//     author: {
//       firstname: user.firstname,
//       lastname: user.lastname,
//       avatarUrl: user.avatarUrl,
//     },
//     createdAt: timestamp,
//     text: event.text,
//   };
//   const collection = await this.db.collection<any>('comments', ref => ref.where('pictureId', '==', pictureId)).get().toPromise();
//   const documentId = collection.docs[0].id;
//   const documentData = collection.docs[0].data();
//   const comments = documentData.comments;
//   const updatedDocument = await this.db.doc(`comments/${documentId}`);
//   const newComments = {...documentData, comments: [...documentData.comments, comment]};
//   console.log(newComments);
//   updatedDocument.update(newComments);
  // console.log(collection.docs[0].data());
  // collection.docs[0].ref.update({comments: [comment]});



