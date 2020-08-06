import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetingcomp',
  template: `
    <p>
      greetingcomp works!
      <button (click)='show()'>Click Here</button>
      <p>
    <span>{{str}}</span>
    </p>
  `,
  styles: [
  ]
})
export class GreetingcompComponent implements OnInit {

  constructor() { }

  greetings=["Hello", "Hi", "Namaste", "Salaam", "Bonjour"]
  str:string="";

  show(){
   this.str=this.greetings[Math.floor(Math.random()* this.greetings.length)];
  }

  ngOnInit(): void {
  }

}
