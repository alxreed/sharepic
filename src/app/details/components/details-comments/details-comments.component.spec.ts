import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCommentsComponent } from './details-comments.component';

describe('DetailsCommentsComponent', () => {
  let component: DetailsCommentsComponent;
  let fixture: ComponentFixture<DetailsCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
