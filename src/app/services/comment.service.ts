import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private db: AngularFirestore) { }

  getCommentsByPictureId(pictureId: string) {
    return this.db.collection<any>('comments', ref => ref.where('pictureId', '==', pictureId)).valueChanges();
  }


  async addCommentInDB(event, pictureId, user) {
    const timestamp = new Date();
    const comment = {
      author: {
        firstname: user.firstname,
        lastname: user.lastname,
        avatarUrl: user.avatarUrl,
      },
      createdAt: timestamp,
      text: event.text,
    };
    const collection = await this.db.collection<any>('comments', ref => ref.where('pictureId', '==', pictureId)).get().toPromise();
    const documentId = collection.docs[0].id;
    const documentData = collection.docs[0].data();
    const comments = documentData.comments;
    const updatedDocument = await this.db.doc(`comments/${documentId}`);
    const newComments = {...documentData, comments: [...documentData.comments, comment]};
    console.log(newComments);
    updatedDocument.update(newComments);
    // console.log(collection.docs[0].data());
    // collection.docs[0].ref.update({comments: [comment]});


  }
}


