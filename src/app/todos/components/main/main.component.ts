import { NgFor, NgIf } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Todo } from '../../interface/todo.interface';
import { TodoService } from '../../services/todo.service';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor, NgIf, TodoComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {
  todoService = inject(TodoService);

  todoCount = computed(() => this.todoService.todoSig().length);

  deleteTodo(todo: Todo) {
    this.todoService.removeTodo(todo);
  }
}
