import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    todos: Todo[] = [
        {id: 1, name: 'Learn about forms', isDone: false},
        {id: 2, name: 'Learn about DI', isDone: false},
        {id: 3, name: 'Learn about routing', isDone: false},
        {id: 4, name: 'Learn about testing', isDone: false},
        {id: 5, name: 'Create SZIA app', isDone: false}
    ];

    constructor() { }

    ngOnInit() { }

}