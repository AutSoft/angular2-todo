import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <h1>Hello {{name}}</h1>
            <button class="btn btn-default" (click)="counter = counter + 1;">Click</button>
            <div>The button has been clicked {{counter}} times</div>
            <datepicker [(ngModel)]="date" [showWeeks]="showWeeks"></datepicker>
            <todo-list #list></todo-list>
            <todo-add (add)="list.todos.push($event)"></todo-add>
        </div>
    `,
    styles: [
        `
        datepicker {
            display: inline-block;
        }
        .container {
            margin: 2%;
        }
    `]
})
export class AppComponent {
    name = 'Angular';
    counter = 0;
    date = new Date();
    showWeeks = true;
}
