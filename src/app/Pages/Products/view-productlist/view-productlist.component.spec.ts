import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductlistComponent } from './view-productlist.component';

describe('ViewProductlistComponent', () => {
  let component: ViewProductlistComponent;
  let fixture: ComponentFixture<ViewProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
