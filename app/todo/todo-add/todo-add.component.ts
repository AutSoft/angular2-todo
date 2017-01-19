import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
    moduleId: module.id,
    selector: 'todo-add',
    templateUrl: 'todo-add.component.html'
})
export class TodoAddComponent implements OnInit {
    @Output() add = new EventEmitter<Todo>();
    inputVisible = false;

    constructor() { }

    ngOnInit() { }

    onButtonClick() {
        this.inputVisible = true;
    }

    onEnterKeystroke(name: string) {
        this.add.emit({name: name, isDone: false});
        this.inputVisible = false;
    }

}