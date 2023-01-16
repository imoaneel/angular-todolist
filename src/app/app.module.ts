
import { TodoListModule } from './todo-list/todo-list.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule,TodoListModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
