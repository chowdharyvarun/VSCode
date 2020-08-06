import { Component, OnInit } from '@angular/core';
import { User } from "./User";

@Component({
  selector: 'print-name',
  template: `
  <form (ngSubmit)='show()'>
    User Name:<input [(ngModel)]=user.username name='uname'/>  
    User Address:<input [(ngModel)]=user.useraddress name='uadd'/>
    User Age:<input [(ngModel)]=user.userage name='uage'/>
    <button type="submit">Submit</button>
     <!--<img src='{{imagePath}}'/>-->
    <img [src]='imagePath'/>
    <span [innerHTML]='title'></span>
  </form>
  `,
  styles: [
  ]
})
export class PrintNameComponent implements OnInit {

  imagePath='assets/img.jpg';
  title='Hello How are you';

  user=new User;
  constructor() { 
    console.log("Constructor called");
  }

  show(){
    console.log("Show() called");
    console.log(this.user.username+' '+this.user.useraddress+' '+this.user.userage);
  }

  ngOnInit(): void {
    console.log("Onit Called");
    console.log(this.user.username+' '+this.user.useraddress+' '+this.user.userage);
  }

}
