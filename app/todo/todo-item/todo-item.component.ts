import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
    @Input() todo: Todo;
    @Output() todoChange = new EventEmitter<Todo>();

    constructor() { }

    ngOnInit() { }

    todoChanged(isDone: boolean) {
        this.todoChange.emit(Object.assign({}, this.todo, {isDone: isDone}));
    }

}