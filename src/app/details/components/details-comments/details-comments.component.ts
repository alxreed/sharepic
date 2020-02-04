import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-details-comments',
  templateUrl: './details-comments.component.html',
  styleUrls: ['./details-comments.component.scss']
})
export class DetailsCommentsComponent implements OnChanges {
  @Input() comments: any;
  @Output() commentContent = new EventEmitter<any>();
  commentsArray;

  commentForm: FormGroup;

  constructor(private route: ActivatedRoute, private service: CommentService) { }

  ngOnChanges(): void {
    this.commentsArray = this.comments ? this.comments[0].comments : [];
    this.commentForm = new FormGroup({
      text: new FormControl('', [])
    });
  }

  comment() {
    console.log(this.commentForm.value);
    this.commentContent.emit(this.commentForm.value);

  }

}

