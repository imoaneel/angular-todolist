import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css'],
})
export class TodoDeleteComponent implements OnInit {
  @Input()
  item: any;
  deleteCounter: any;

  @Output()
  delete = new EventEmitter<any>();
  cancel = new EventEmitter<any>();

  constructor() {}

  deleteList() {
    this.delete.emit(this.item);
    console.log('delete msg send', this.item);
  }
  cancelDelete() {
    this.cancel.emit(this.item);
    console.log('delete msg send', this.item);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
