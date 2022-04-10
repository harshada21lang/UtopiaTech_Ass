import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTaskComponent } from './api-task.component';

describe('ApiTaskComponent', () => {
  let component: ApiTaskComponent;
  let fixture: ComponentFixture<ApiTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
