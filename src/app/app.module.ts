import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { firstComponent } from "./firstcom";
import { LuckynumberComponent } from './luckynumber/luckynumber.component';
import { CounterComponent } from './counter/counter.component';
import { HelloName } from "./helloname";
import { FormsModule } from "@angular/forms";
import { PrintNameComponent } from './print-name/print-name.component';
import { DirectivecompComponent } from './directivecomp/directivecomp.component';
import { EmployeecompComponent } from './employeecomp/employeecomp.component';
import { GreetingcompComponent } from './greetingcomp/greetingcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    firstComponent,
    LuckynumberComponent,
    CounterComponent,
    HelloName,
    PrintNameComponent,
    DirectivecompComponent,
    EmployeecompComponent,
    GreetingcompComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap:[firstComponent]
})
export class AppModule { }
