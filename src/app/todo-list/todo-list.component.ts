import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  data: Array<any> = [];
  newTodoList = {
    id: 0,
    content: "",
    priority: 0,
    editShow: false,
    deleteShow: false,
  };

  makeTodo(todo: string) {
    this.newTodoList.content = todo;
  }
  newDatalist(datalist: any) {
    this.data = datalist;
    console.log(datalist)
  }
  ngOnInit(): void {
    this.data = [
      {
        id: 1,
        content: "餵貓",
        priority: 3,
        editShow: false,
        deleteShow: false,
      },
      {
        id: 2,
        content: "看漫畫",
        priority: 2,
        editShow: false,
        deleteShow: false,
      },
      {
        id: 3,
        content: "寫程式",
        priority: 1,
        editShow: false,
        deleteShow: false,
      },
      {
        id: 4,
        content: "買牛奶",
        priority: 2,
        editShow: false,
        deleteShow: false,
      },
      {
        id: 5,
        content: "蝦皮取貨",
        priority: 1,
        editShow: false,
        deleteShow: false,
      },

      {
        id: 6,
        content: "洗衣服",
        priority: 2,
        editShow: false,
        deleteShow: false,
      },
      {
        id: 7,
        content: "吃藥",
        priority: 4,
        editShow: false,
        deleteShow: false,
      },
    ];
  }
}
