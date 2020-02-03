import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private storage: AngularFireStorage) { }

  uploadPicture(event: any) {
    this.storage.upload(event.title, event.file);
  }

}


// gs://sharepic-e5be2.appspot.com
