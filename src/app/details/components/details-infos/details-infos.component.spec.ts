import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInfosComponent } from './details-infos.component';

describe('DetailsInfosComponent', () => {
  let component: DetailsInfosComponent;
  let fixture: ComponentFixture<DetailsInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
