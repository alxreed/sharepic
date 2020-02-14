import { Component, OnInit } from '@angular/core';
import { PictureService } from '../services/picture.service';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sharepic-home',
  templateUrl: './sharepic-home.component.html',
  styleUrls: ['./sharepic-home.component.scss']
})
export class SharepicHomeComponent implements OnInit {

  pictures$: Observable<any[]>;
  id: string;
  isPictureLikedByUser: boolean;
  pictureCommented: any;

  constructor(
    private pictureService: PictureService,
    private userService: UserService) { }

  ngOnInit() {
    this.pictures$ = this.pictureService.getPopularPictures();
  }

  async onlikePicture(event: any) {
    const user = this.userService.getConnectedUser();
    console.log(event);
    console.log(user);

    this.isPictureLikedByUser = await this.pictureService.likePicture(user, event, event.id);
  }

}
