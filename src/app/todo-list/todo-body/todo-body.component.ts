import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-body',
  templateUrl: './todo-body.component.html',
  styleUrls: ['./todo-body.component.css'],
})
export class TodoBodyComponent implements OnInit {
  data: Array<any> = [];

  constructor() {}
  doEdit(item: any) {
    console.log('item', item);
    this.data.filter((v) => {
      return v.content = item.content;
      // 這邊還沒好好寫
    });
  }
  cancelEdit(item: any) {
    console.log('item', item);
    this.data.map((v) => {
      if (v.id === item.id) {
        v.editShow = !v.editShow;
      }
      return;
    });
  }
  doDelete(item: any) {
    console.log('item', item);
    this.data.filter((v) => {
      return v.id !== item.id;
    });
  }
  cancelDelete(item: any) {
    console.log('item', item);
    this.data.map((v) => {
      if (v.id === item.id) {
        v.deleteShow = !v.deleteShow;
      }
      return;
    });
  }
  changePriority(item: any) {
    this.data.map((v) => {
      if (v.id === item.id) {
        v.priority++;
        console.log(v.id, v.priority);
      }
      return;
    });
  }
  hideEdit(item: any) {
    this.data.map((v) => {
      if (v.id === item.id) {
        v.editShow = !v.editShow;
      }
    });
  }
  hideDelete(item: any) {
    this.data.map((v) => {
      if (v.id === item.id) {
        v.deleteShow = !v.deleteShow;
      }
    });
  }

  ngOnInit(): void {
    this.data = [
      {
        id: 1,
        content: '餵貓',
        priority: 3,
        editShow: false,
        deleteShow: false,
      },
      {
        id: 2,
        content: '看漫畫',
        priority: 2,
        editShow: false,
        deleteShow: false,
      },
      {
        id: 3,
        content: '寫程式',
        priority: 1,
        editShow: false,
        deleteShow: false,
      },
      {
        id: 4,
        content: '買牛奶',
        priority: 2,
        editShow: false,
        deleteShow: false,
      },
      {
        id: 5,
        content: '蝦皮取貨',
        priority: 1,
        editShow: false,
        deleteShow: false,
      },

      {
        id: 6,
        content: '洗衣服',
        priority: 2,
        editShow: false,
        deleteShow: false,
      },
      {
        id: 7,
        content: '吃藥',
        priority: 4,
        editShow: false,
        deleteShow: false,
      },
    ];
  }
}
