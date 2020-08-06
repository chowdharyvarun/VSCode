import { Component, OnInit } from '@angular/core';
import { Employee } from "./Employee";
@Component({
  selector: 'app-employeecomp',
  template: `
  <table>
  <tr>
  <th>Employee Id:  </th>
  <th>Employee Name:  </th>
  <th>Employee Age:  </th>
  <th>Employee Designation:  </th>
  </tr>

  <tr *ngFor='let e of emp'>
  <td>{{e.employeeid}}</td>
  <td>{{e.employeename}}</td>
  <td>{{e.employeeage}}</td>
  <td>{{e.employeedesig}}</td>
  </tr>
  </table>  
  `,
  styles: [
  ]
})
export class EmployeecompComponent implements OnInit {

  emp1=new Employee(100,'Varun',22,'Trainee')
  emp2=new Employee(101,'Rohan',22,'Trainee')
  emp3=new Employee(102,'Siddant',21,'Trainee')
  emp:Employee[]=[this.emp1,this.emp2,this.emp3]

  constructor() {
   }

  ngOnInit(): void {
    }

}
