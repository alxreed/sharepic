import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  @Input() picture: any;
  @Input() like: any;
  @Output() likePicture = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onlikePicture() {
    this.likePicture.emit(this.picture);
  }

}
