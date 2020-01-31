import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailPictureComponent } from './components/detail-picture/detail-picture.component';



@NgModule({
  declarations: [DetailsComponent, DetailPictureComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
