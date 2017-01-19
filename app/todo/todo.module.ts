import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
    imports: [CommonModule],
    exports: [TodoListComponent],
    declarations: [TodoListComponent, TodoItemComponent],
    providers: [],
})
export class TodoModule {
}
