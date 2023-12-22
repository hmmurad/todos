import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  text: string = '';

  changeText(event: Event): void {
    const changedText = (event.target as HTMLInputElement).value;
    this.text = changedText;
  }

  addTodo() {
    this.todoService.addTodo(this.text);
    this.text = '';
  }
  todoService = inject(TodoService);
}
