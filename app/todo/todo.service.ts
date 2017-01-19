import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable()
export class TodoService {

    constructor(private http: Http) { }

    getTodos() {
        return this.http.get('app/todos')
            .map((response: Response) => response.json().data)
            .catch(response => {console.log(response); return Observable.throw(response);});
    }

    postTodo(todo: Todo) {
        return this.http.post('app/todos', todo, new Headers({'content-type': 'application/json'}))
            .map((response: Response) => response.json().data)
            .catch(response => {console.log(response); return Observable.throw(response);});
    }

}
