import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharepicHomeComponent } from './sharepic-home.component';

const routes: Routes = [
  {
    path: '',
    component: SharepicHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharepicHomeRoutingModule {}
