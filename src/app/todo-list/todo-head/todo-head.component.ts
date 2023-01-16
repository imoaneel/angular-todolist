import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-head',
  templateUrl: './todo-head.component.html',
  styleUrls: ['./todo-head.component.css']
})
export class TodoHeadComponent {
  title = 'todolist';
  establish = ' (́◉◞౪◟◉‵)';
  keyword = "";
  counter =0;
  bgcolor = "hsl(167, 100%, 50%)";
  todo = new EventEmitter<any>();


  url = "https://www.pinterest.com/"
  titleChange(altKey: boolean){
    if(altKey){

      this.establish = ' (′≖◞౪◟≖)'

    }
  }
  makeList(todoA:string){
    this.todo.emit(todoA)
    console.log("#todoA",todoA)
  }
  colorChange(){
    this.counter++;
  }
  textColor(){
    let hslcolor =`hsl(167 + ${ 30 * this.counter}, 100%, 50%)`;
    return{"color": `hsl( ${ 167 + 30 * this.counter}, 100%, 50%)`}

  }

}
