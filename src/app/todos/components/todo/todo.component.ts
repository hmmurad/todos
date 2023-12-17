import { Component, Input, computed, inject } from '@angular/core';
import { Todo } from '../../interface/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todoService = inject(TodoService);
  @Input() todo!: Todo;
  todoCount = computed(() => this.todoService.todoSig().length);

  deleteTodo(todo: Todo) {
    this.todoService.removeTodo(todo);
  }
}
