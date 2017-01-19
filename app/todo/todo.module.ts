import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { HttpModule } from '@angular/http';
import { TodoService } from './todo.service';

@NgModule({
    imports: [CommonModule, HttpModule],
    exports: [TodoListComponent, TodoAddComponent],
    declarations: [TodoListComponent, TodoItemComponent, TodoAddComponent],
    providers: [TodoService],
})
export class TodoModule {
}
