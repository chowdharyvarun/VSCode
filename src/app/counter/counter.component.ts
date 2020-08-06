import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      counter works!
      <button (click)='show()'>Click Here</button>
      <p>Your counter is:{{counter}}</p>
  `,
  styles: ['p{font-weight:bold;font-size:40;font-family:arial}' 
  ]
})
export class CounterComponent implements OnInit {

  counter:number=101;

  show(){
    this.counter++;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
