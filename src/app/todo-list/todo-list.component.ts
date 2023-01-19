import { DataService } from "./data.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  // data: Array<any> = [];
  data: any;
  newTodoList = {
    id: 0,
    content: "",
    priority: 0,
    editShow: false,
    deleteShow: false,
  };

  // dataservice: DataService = new DataService;
  // constructor(dataservice:DataService){
  //    this.dataservice = dataservice;
  // }

  constructor(public dataservice: DataService) {}
  makeTodo(todo: string) {
    this.newTodoList.content = todo;
    this.newTodoList.id = this.data.length + 1;
    console.log("this.newTodoList", this.newTodoList);
    this.data.push(Object.assign({}, this.newTodoList));
    console.log("makeTODO", this.data);
  }

  newDatalist(datalist: any) {
    this.data = datalist;
    console.log(datalist);
  }

  ngOnInit(): void {
    this.dataservice.run();
    // this.data = this.dataservice.data

    this.dataservice.getData().subscribe((result) => {
      this.data = result;
      // 真正接api做的話是這樣
    });
  }
}
