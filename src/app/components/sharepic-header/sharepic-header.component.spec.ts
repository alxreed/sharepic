import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharepicHeaderComponent } from './sharepic-header.component';

describe('SharepicHeaderComponent', () => {
  let component: SharepicHeaderComponent;
  let fixture: ComponentFixture<SharepicHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharepicHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharepicHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
