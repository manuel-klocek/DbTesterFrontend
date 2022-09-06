import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulateQuerydbComponent } from './manipulate-querydb.component';

describe('ManipulateQuerydbComponent', () => {
  let component: ManipulateQuerydbComponent;
  let fixture: ComponentFixture<ManipulateQuerydbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManipulateQuerydbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManipulateQuerydbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
