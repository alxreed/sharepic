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
  pictureCommented;
  id;


  constructor(
    private route: ActivatedRoute,
    private service: PictureService,
    private commentService: CommentService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('imageId');
    this.picture$ = this.service.getPictureById(this.id);
    this.picture$.subscribe(data => this.pictureCommented = data);
    this.comments$ = this.commentService.getCommentsByPictureId(this.id);
  }

  onUserComment(event) {
    console.log(this.pictureCommented);
    console.log(event);
    const user = this.userService.getConnectedUser();
    console.log(user);
    this.commentService.addCommentInDB(event, this.id, user);

  }
}
