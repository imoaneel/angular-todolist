import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  @Input()
  item:any;
  editCounter:any;

  @Output()
  canceledit= new EventEmitter;
  edit = new EventEmitter;

  constructor(){}

  ngOnInit(): void {

  }
}
