import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-picture',
  templateUrl: './detail-picture.component.html',
  styleUrls: ['./detail-picture.component.scss']
})
export class DetailPictureComponent implements OnInit {

  @Input() picture: any;

  constructor() { }

  ngOnInit() {
  }

}
