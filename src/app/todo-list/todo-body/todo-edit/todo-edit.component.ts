import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-edit",
  templateUrl: "./todo-edit.component.html",
  styleUrls: ["./todo-edit.component.css"],
})
export class TodoEditComponent implements OnInit {
  editContent = "";
  @Input() item: any;

  @Output() canceledit = new EventEmitter();
  @Output() edit = new EventEmitter();

  editCancel() {
    this.canceledit.emit(this.item);
    console.log("cancel edit", this.item);
  }
  editConfirm(todoEdit: string) {
    this.editContent = todoEdit;
    this.edit.emit({ id: this.item.id, content: todoEdit });
    console.log("confirm edit", this.item, todoEdit);
  }
  constructor() {}

  ngOnInit(): void {
    this.editContent = this.item.content;
  }
}
