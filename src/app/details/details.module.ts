import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailPictureComponent } from './components/detail-picture/detail-picture.component';
import { DetailsInfosComponent } from './components/details-infos/details-infos.component';
import { DetailsCommentsComponent } from './components/details-comments/details-comments.component';



@NgModule({
  declarations: [DetailsComponent, DetailPictureComponent, DetailsInfosComponent, DetailsCommentsComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
