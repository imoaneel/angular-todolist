import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHeadComponent } from './todo-head.component';

describe('TodoHeadComponent', () => {
  let component: TodoHeadComponent;
  let fixture: ComponentFixture<TodoHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
