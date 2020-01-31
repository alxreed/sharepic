import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PictureService } from '../services/picture.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  picture$: Observable<any>;

  constructor(private route: ActivatedRoute, private service: PictureService) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('imageId');
    this.picture$ = this.service.getPictureById(id);
    console.log(this.picture$);
    // this.picture$.subscribe(data => console.log(data));
  }

}
