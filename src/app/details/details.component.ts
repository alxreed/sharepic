import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public pictureTitle;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let title = this.route.snapshot.paramMap.get('title');
    this.pictureTitle = title;
  }

}
