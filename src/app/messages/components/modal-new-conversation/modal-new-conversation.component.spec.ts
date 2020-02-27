import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewConversationComponent } from './modal-new-conversation.component';

describe('ModalNewConversationComponent', () => {
  let component: ModalNewConversationComponent;
  let fixture: ComponentFixture<ModalNewConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNewConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
