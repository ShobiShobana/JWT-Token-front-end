import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertingComponent } from './inserting.component';

describe('InsertingComponent', () => {
  let component: InsertingComponent;
  let fixture: ComponentFixture<InsertingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
