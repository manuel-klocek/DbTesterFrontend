import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulateDBComponent } from './manipulate-db.component';

describe('ManipulateDBComponent', () => {
  let component: ManipulateDBComponent;
  let fixture: ComponentFixture<ManipulateDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManipulateDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManipulateDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
