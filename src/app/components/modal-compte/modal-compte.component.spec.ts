import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompteComponent } from './modal-compte.component';

describe('ModalCompteComponent', () => {
  let component: ModalCompteComponent;
  let fixture: ComponentFixture<ModalCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
