import { Component, Input, Output,EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-body",
  templateUrl: "./todo-body.component.html",
  styleUrls: ["./todo-body.component.css"],
})
export class TodoBodyComponent {
  @Input() data: any;
  @Output() newData = new EventEmitter();
  constructor() {}

  // todo-content
  changePriority(PriorityItem: any) {
    this.data.map((item: any) => {
      if (item.id === PriorityItem.id) {
        item.priority++;
        console.log("changePriority", item.id, item.priority);
      }
      return this.data;
    });
    this.newData.emit(this.data);
  }
  showEdit(editItem: any) {
    this.data.map((item: any) => {
      if (item.id === editItem.id) {
        item.editShow = !item.editShow;
        item.deleteShow = false;
      }
    });
    this.newData.emit(this.data);

  }
  showDelete(deleteItem: any) {
    this.data.map((item: any) => {
      if (item.id === deleteItem.id) {
        item.deleteShow = !item.deleteShow;
        item.editShow = false;
      }
    });
    this.newData.emit(this.data);

  }

  // edit
  editItem(editItem: any) {
    this.data = this.data.map((item: any) => {
      if (item.id === editItem.id) {
        item.content = editItem.content;
        // 以上方法 寶哥不建議使用
        // 因為怕其他子元件不知道這份資料的屬性被改動

        return Object.assign({}, item, editItem);
        // 寶哥推薦這個做法
        // 建立一個新物件 把item複製過去 editItem再進行覆蓋
      }
      return item;
    });
    console.log("edititem", editItem);
    this.newData.emit(this.data);

  }

  cancelEdit(editItem: any) {
    console.log("editItem", editItem);
    this.data.map((item: any) => {
      if (item.id === editItem.id) {
        item.editShow = !item.editShow;
      }
      return;
    });
    this.newData.emit(this.data);

  }

  // delete
  deleteItem(deleteItem: any) {
    console.log("deleteItem", deleteItem);
    this.data = this.data.filter((item: any) => {
      return item.id !== deleteItem.id;
    });
    this.newData.emit(this.data);

  }
  cancelDelete(deleteItem: any) {
    console.log("deleteItem",deleteItem);
    this.data.map((item: any) => {
      if (item.id === deleteItem.id) {
        item.deleteShow = !item.deleteShow;
      }
      return this.data;
    });
    this.newData.emit(this.data);

  }
}
