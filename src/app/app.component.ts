import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-luckynumber></app-luckynumber>
  `,
  styles: [`p[font-weight:bold]`]
})
export class AppComponent {
  title = 'myFirstAngularApp';
}

//<print-name></print-name>
//<app-directivecomp></app-directivecomp>
//<app-employeecomp></app-employeecomp>