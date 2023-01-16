import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-todo-content",
  templateUrl: "./todo-content.component.html",
  styleUrls: ["./todo-content.component.css"],
})
export class TodoContentComponent implements OnInit {
  @Input()
  item: any;

  @Output()
  priorityItem = new EventEmitter<any>();
  editItem = new EventEmitter<any>();
  deleteItem = new EventEmitter<any>();

  constructor() {}

  priorityChange() {
    this.priorityItem.emit(this.item);
    console.log("prioritychange msg send", this.item);
  }

  editHide() {
    this.editItem.emit(this.item);
    console.log("editbox msg send", this.item);
  }
  deleteHide() {
    this.deleteItem.emit(this.item);
    console.log("deletebox msg send", this.item);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  // 幾乎用不到
  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.

  // }
}
