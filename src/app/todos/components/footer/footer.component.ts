import { NgIf } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  todoService = inject(TodoService);
  todoCount = computed(() => this.todoService.todoSig().length);
  pluralS = computed(() =>
    this.todoService.todoSig().length !== 1 ? 's' : ''
  );
}
