import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo-add',
    templateUrl: 'todo-add.component.html'
})
export class TodoAddComponent implements OnInit {
    @Output() add = new EventEmitter<Todo>();
    inputVisible = false;

    constructor(private todoService: TodoService) { }

    ngOnInit() { }

    onButtonClick() {
        this.inputVisible = true;
    }

    onEnterKeystroke(name: string) {
        this.todoService.postTodo({name: name, isDone: false}).subscribe(
            todo => {
                this.add.emit(todo);
                this.inputVisible = false;
            },
            () => {}
        );
    }

}