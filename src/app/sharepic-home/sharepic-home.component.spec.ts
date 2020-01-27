import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharepicHomeComponent } from './sharepic-home.component';

describe('SharepicHomeComponent', () => {
  let component: SharepicHomeComponent;
  let fixture: ComponentFixture<SharepicHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharepicHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharepicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
