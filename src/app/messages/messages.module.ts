import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessagesComponent} from './messages.component';
import {MessagesRoutingModule} from './messages-routing.module';
import { ConversationComponent } from './components/conversation/conversation.component';
import { ModalNewConversationComponent } from './components/modal-new-conversation/modal-new-conversation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';



@NgModule({
  declarations: [
    MessagesComponent,
    ConversationComponent,
    ModalNewConversationComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MessagesModule { }
