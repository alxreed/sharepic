import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-new-conversation',
  templateUrl: './modal-new-conversation.component.html',
  styleUrls: ['./modal-new-conversation.component.scss']
})
export class ModalNewConversationComponent implements OnInit {
  @Output() cancelConversation = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  cancelNewConversation() {
    this.cancelConversation.emit(true);
  }

}
