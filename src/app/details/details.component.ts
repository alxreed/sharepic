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
    console.log(id);
    this.picture$ = this.service.getPictureById(id);
    // this.picture$.subscribe(data => console.log(data));
  }

}
