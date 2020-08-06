import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luckynumber',
  templateUrl: './luckynumber.component.html',
  styleUrls: ['./luckynumber.component.css']
})
export class LuckynumberComponent implements OnInit {

  //luckynumber:number=100;
  luckynumber:number;

  show(){
    this.luckynumber=Math.round(Math.random()*10);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
