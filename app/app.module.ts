import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { TodoModule } from './todo/todo.module';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDb } from './mocks/in-memory-todo-db';

@NgModule({
    imports: [
        BrowserModule,
        Ng2BootstrapModule.forRoot(),
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryTodoDb, {delay: 2000}),
        TodoModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
