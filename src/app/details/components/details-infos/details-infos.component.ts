import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-details-infos',
  templateUrl: './details-infos.component.html',
  styleUrls: ['./details-infos.component.scss']
})
export class DetailsInfosComponent implements OnInit {

  @Input() picture: any;

  @Output() likePicture = new EventEmitter<any>();

  like = false;

  constructor() { }

  ngOnInit() {

  }

  onlikePicture() {
    this.likePicture.emit(true);
  }

}
