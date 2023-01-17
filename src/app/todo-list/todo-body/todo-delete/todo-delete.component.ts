import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-todo-delete",
  templateUrl: "./todo-delete.component.html",
  styleUrls: ["./todo-delete.component.css"],
})
export class TodoDeleteComponent implements OnInit {
  @Input() item: any;

  @Output() delete = new EventEmitter();
  @Output() cancel = new EventEmitter();

  deleteList() {
    this.delete.emit(this.item);
    console.log("delete msg send", this.item);
  }
  cancelDelete() {
    this.cancel.emit(this.item);
    console.log("delete msg send", this.item);
  }
  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
