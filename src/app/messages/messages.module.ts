import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessagesComponent} from './messages.component';
import {MessagesRoutingModule} from './messages-routing.module';
import { ConversationComponent } from './components/conversation/conversation.component';



@NgModule({
  declarations: [
    MessagesComponent,
    ConversationComponent,
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
  ]
})
export class MessagesModule { }
