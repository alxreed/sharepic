import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-details-infos',
  templateUrl: './details-infos.component.html',
  styleUrls: ['./details-infos.component.scss']
})
export class DetailsInfosComponent implements OnInit {

  @Input() picture: any;
  @Input() like;

  @Output() likePicture = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {

  }

  onlikePicture() {
    this.likePicture.emit(true);
  }

}
