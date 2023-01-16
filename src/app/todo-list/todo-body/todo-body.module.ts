import { TodoBodyComponent } from './todo-body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoContentComponent } from './todo-content/todo-content.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';



@NgModule({
  declarations: [
    TodoContentComponent,
    TodoEditComponent,
    TodoDeleteComponent,
    TodoBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TodoBodyComponent
  ]
})
export class TodoBodyModule { }
