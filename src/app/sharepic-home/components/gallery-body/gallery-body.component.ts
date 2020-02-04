import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-gallery-body',
  templateUrl: './gallery-body.component.html',
  styleUrls: ['./gallery-body.component.scss']
})
export class GalleryBodyComponent implements OnChanges {
  @Input() pictures: any[];
  constructor() { }

  ngOnChanges() {
  }

}
