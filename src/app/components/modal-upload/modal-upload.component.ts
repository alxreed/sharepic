import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss']
})
export class ModalUploadComponent implements OnInit {

  @Output() cancelUploadForm = new EventEmitter<any>();

  UploadForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  connectToUploadForm() {
    this.cancelUploadForm.emit(true);
  }

}
