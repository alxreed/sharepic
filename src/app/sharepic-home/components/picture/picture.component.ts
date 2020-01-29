import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  @Input() picture: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(picture) {
    this.router.navigate(['/image', picture.title]);
  }
}
