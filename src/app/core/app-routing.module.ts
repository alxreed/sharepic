import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../sharepic-home/sharepic-home.module').then(mod => mod.SharepicHomeModule),
  },
  {
    path: 'messages',
    loadChildren: () => import('../messages/messages.module').then(mod => mod.MessagesModule),
  },
  {
    path: 'image/:imageId',
    loadChildren: () => import('../details/details.module').then(mod => mod.DetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
