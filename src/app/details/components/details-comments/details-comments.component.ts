import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-comments',
  templateUrl: './details-comments.component.html',
  styleUrls: ['./details-comments.component.scss']
})
export class DetailsCommentsComponent implements OnChanges {
  @Input() comments: any;
  commentsArray;

  constructor(private route: ActivatedRoute, private service: CommentService) { }

  ngOnChanges(): void {
    this.commentsArray = this.comments ? this.comments[0].comments : [];
  }

}

