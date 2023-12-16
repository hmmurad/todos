import { Component, computed, inject, signal } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { NgFor, NgIf } from '@angular/common';
import { Todo } from '../interface/todo.interface';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './main.component.html',
})
export class MainComponent {
  todoService = inject(TodoService);

  todoCount = computed(() => this.todoService.todoSig().length);

  deleteTodo(todo: Todo) {
    this.todoService.removeTodo(todo);
  }
}
