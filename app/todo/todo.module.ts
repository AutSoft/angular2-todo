import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';

@NgModule({
    imports: [CommonModule],
    exports: [TodoListComponent, TodoAddComponent],
    declarations: [TodoListComponent, TodoItemComponent, TodoAddComponent],
    providers: [],
})
export class TodoModule {
}
