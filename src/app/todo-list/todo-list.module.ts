import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoHeadComponent } from './todo-head/todo-head.component';
import { TodoBodyComponent } from './todo-body/todo-body.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list.component';
import { TodoBodyModule } from './todo-body/todo-body.module';

@NgModule({
  declarations: [TodoHeadComponent, TodoListComponent],
  imports: [CommonModule, FormsModule,TodoBodyModule],
  exports: [TodoListComponent],
})
export class TodoListModule {}
