import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryTodoDb implements InMemoryDbService {
    createDb(): {} {
        let todos = [
            {id: 1, name: 'Learn about forms', isDone: false},
            {id: 2, name: 'Learn about DI', isDone: false},
            {id: 3, name: 'Learn about routing', isDone: false},
            {id: 4, name: 'Learn about testing', isDone: false},
            {id: 5, name: 'Create SZIA app', isDone: false}
        ];
        return {todos};
    }
}