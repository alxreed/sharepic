import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoveryHeaderComponent } from './components/discovery-header/discovery-header.component';
import { SharepicHomeComponent } from './sharepic-home.component';
import { TabNavigationComponent } from './components/tab-navigation/tab-navigation.component';
import { SharepicHomeRoutingModule } from './sharepic-home-routing.module';
import { GalleryBodyComponent } from './components/gallery-body/gallery-body.component';
import { PictureComponent } from './components/picture/picture.component';



@NgModule({
  declarations: [
    DiscoveryHeaderComponent,
    SharepicHomeComponent,
    TabNavigationComponent,
    GalleryBodyComponent,
    PictureComponent
  ],
  imports: [
    CommonModule,
    SharepicHomeRoutingModule
  ]
})
export class SharepicHomeModule { }
