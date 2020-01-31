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
}

