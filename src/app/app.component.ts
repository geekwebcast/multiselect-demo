import { Component } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text: string;
  results: string[];
  prevText:string;
constructor(){

}
onKeyUp	(event){
debugger;
if(event.target.value!="add"){
  this.prevText=event.target.value;
  console.log(event);
}

}
  search(event) {
    debugger;
    if(event.query=="add" || event.query==''){
      alert(this.prevText);
    }
    else
    this.results = data;

  }
}
