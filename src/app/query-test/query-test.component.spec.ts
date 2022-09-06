import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryTestComponent } from './query-test.component';

describe('QueryTestComponent', () => {
  let component: QueryTestComponent;
  let fixture: ComponentFixture<QueryTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
