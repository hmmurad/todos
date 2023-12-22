import { Injectable, signal } from '@angular/core';
import { Todo } from '../interface/todo.interface';
import { FilterEnum } from '../interface/todo.enum';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoSig = signal<Todo[]>([]);
  filterSig = signal<FilterEnum>(FilterEnum.all)

  addTodo(text: string): void {
    const newTodo: Todo = {
      id: Math.random().toString(16),
      text: text,
      isCompleted: false,
    };
    this.todoSig.update((todos) => [...todos, newTodo]);
  }

  // update filterSig
  updateFilterSig(filterName: FilterEnum): void{
    this.filterSig.set(filterName)
  }

  // remove todo
  removeTodo(todo: Todo): void {
    this.todoSig.update((todos) => todos.filter((t) => t.id !== todo.id));
  }

  // update todo
  updateTodo(id: string, text:string) {
     this.todoSig.update((todos) => 
      todos.map((todo) => (todo.id === id ? {...todo, text} : todo))
     )
  }

  // toggle todo to change todo status
  changeStatus(id: string) : void {
    this.todoSig.update((todos) => 
      todos.map((todo) =>
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)
     )
  }
}
