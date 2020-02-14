import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery-body',
  templateUrl: './gallery-body.component.html',
  styleUrls: ['./gallery-body.component.scss']
})
export class GalleryBodyComponent implements OnChanges {
  @Input() pictures: any[];
  @Input() like;
  @Output() likePicture = new EventEmitter<any>();
  constructor() { }

  ngOnChanges() {
  }

  onlikePicture(event) {
    this.likePicture.emit(event);
  }

}
