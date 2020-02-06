import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PictureService } from '../services/picture.service';
import { Observable } from 'rxjs';
import { CommentService } from '../services/comment.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  picture$: Observable<any>;
  comments$: Observable<any>;
  pictureCommented: any;
  id: string;
  isPictureLikedByUser: boolean;


  constructor(
    private route: ActivatedRoute,
    private pictureService: PictureService,
    private commentService: CommentService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('imageId');
    this.picture$ = this.pictureService.getPictureById(this.id);
    this.picture$.subscribe(data => this.pictureCommented = data);
    this.comments$ = this.commentService.getCommentsByPictureId(this.id);
  }

  onUserComment(event: any) {
    const user = this.userService.getConnectedUser();
    console.log(this.pictureCommented);
    console.log(event);
    console.log(user);
    this.commentService.addCommentInDB(event, this.id, user);

  }

  async onlikePicture(event: any) {
    console.log(event);
    const user = this.userService.getConnectedUser();
    console.log(user);
    this.isPictureLikedByUser = await this.pictureService.likePicture(user, this.pictureCommented, this.id);
  }
}
