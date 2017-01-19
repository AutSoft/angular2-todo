import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { TodoModule } from './todo/todo.module';

@NgModule({
    imports: [BrowserModule, Ng2BootstrapModule.forRoot(), TodoModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
