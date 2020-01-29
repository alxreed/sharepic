import { Component, OnInit } from '@angular/core';
import { PictureService } from '../services/picture.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sharepic-home',
  templateUrl: './sharepic-home.component.html',
  styleUrls: ['./sharepic-home.component.scss']
})
export class SharepicHomeComponent implements OnInit {

  pictures$: Observable<any[]>;

  constructor(private pictureServcie: PictureService) { }

  ngOnInit() {
    this.pictures$ = this.pictureServcie.getPopularPictures();
  }

}
