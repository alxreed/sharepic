import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss']
})
export class ModalUploadComponent implements OnInit {

  @Output() cancelUploadForm = new EventEmitter<any>();
  @Output() upload = new EventEmitter<any>();

  UploadForm: FormGroup;
  file: File | null = null;

  constructor() { }

  ngOnInit() {
    this.UploadForm = new FormGroup({
      name: new FormControl('', []),
      description: new FormControl('', []),
    });
  }

  connectToUploadForm() {
    this.cancelUploadForm.emit(true);
  }

  fileChange(event) {
    console.log(event);
    this.file = event.target.files[0];
  }

  get name() { return this.UploadForm.get('name'); }

  get description() { return this.UploadForm.get('description'); }

  uploadPicture() {
    const data = {
      title: this.UploadForm.value.name,
      description: this.UploadForm.value.description,
      file: this.file,
    };

    console.log(data);

    this.upload.emit(data);
    this.connectToUploadForm();
  }

}
