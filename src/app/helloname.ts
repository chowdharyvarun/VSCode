import{Component, Input}from "@angular/core"
@Component({
    selector:'hello-name',
    template: `
      <form>
         Enter your name:<input [(ngModel)]=username name='nm'>
        <button type='submit'>Submit</button>
        <p>Hello {{username}}</p>
      </form>
  `,
    styles:[]
})

export class HelloName{
    username:string="noname";
}