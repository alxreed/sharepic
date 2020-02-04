import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private storage: AngularFireStorage) { }

  async uploadPicture(event: any) {
    await this.storage.upload(event.title, event.file);
  }

  async getPictureUrl(event) {
    const ref = this.storage.ref(event.title);
    return await ref.getDownloadURL().toPromise();
  }
}
