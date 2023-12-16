import { Injectable, signal } from '@angular/core';
import { Todo } from '../interface/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoSig = signal<Todo[]>([]);

  addTodo(text: string): void {
    const newTodo: Todo = {
      id: Math.random().toString(16),
      text: text,
      isCompleted: false,
    };

    this.todoSig.update((todos) => [...todos, newTodo]);
  }

  // remove todo
  removeTodo(todo: Todo): void {
    this.todoSig.update((todos) => todos.filter((t) => t.id !== todo.id));
  }
}
