import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  // data: any ;
  // newTodoList = {
  //   id: 0,
  //   content: "",
  //   priority: 0,
  //   editShow: false,
  //   deleteShow: false,
  // };
  constructor(private http: HttpClient) {
    // http.get('http://localhost:4200/api/data.json').subscribe((result) => {
    //   this.data = result;
    // });
    // this.data = [
    //   {
    //     id: 1,
    //     content: "餵貓",
    //     priority: 3,
    //     editShow: false,
    //     deleteShow: false,
    //   },
    //   {
    //     id: 2,
    //     content: "看漫畫",
    //     priority: 2,
    //     editShow: false,
    //     deleteShow: false,
    //   },
    //   {
    //     id: 3,
    //     content: "寫程式",
    //     priority: 1,
    //     editShow: false,
    //     deleteShow: false,
    //   },
    //   {
    //     id: 4,
    //     content: "買牛奶",
    //     priority: 2,
    //     editShow: false,
    //     deleteShow: false,
    //   },
    //   {
    //     id: 5,
    //     content: "蝦皮取貨",
    //     priority: 1,
    //     editShow: false,
    //     deleteShow: false,
    //   },

    //   {
    //     id: 6,
    //     content: "洗衣服",
    //     priority: 2,
    //     editShow: false,
    //     deleteShow: false,
    //   },
    //   {
    //     id: 7,
    //     content: "吃藥",
    //     priority: 4,
    //     editShow: false,
    //     deleteShow: false,
    //   },
    // ];
  }

  getData(){
    return this.http.get('http://localhost:4200/api/data.json')
  }

  // deleteData(item){
  //   return this.http.delete('網址')
  // }
  run() {
    console.log("dataService");
  }

  // makeTodo(todo: string) {
  //   this.newTodoList.content = todo;
  //   this.newTodoList.id = this.data.length + 1;
  //   console.log("this.newTodoList", this.newTodoList);
  //   this.data.push(Object.assign({}, this.newTodoList));
  //   console.log("makeTODO", this.data);
  // }

  // newDatalist(datalist: any) {
  //   this.data = datalist;
  //   console.log(datalist);
  // }
}
