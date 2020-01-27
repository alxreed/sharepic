import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryHeaderComponent } from './discovery-header.component';

describe('DiscoveryHeaderComponent', () => {
  let component: DiscoveryHeaderComponent;
  let fixture: ComponentFixture<DiscoveryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoveryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
