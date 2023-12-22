import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FilterEnum } from '../../interface/todo.enum';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  todoService = inject(TodoService);
  filterSig = this.todoService.filterSig
  filterEnum = FilterEnum
  todoCount = computed(() => {
    return this.todoService.todoSig().filter((todo) => !todo.isCompleted).length});
  noTodoClass = computed(() => this.todoService.todoSig().length)
  pluralS = computed(() =>
    `item${this.todoCount() !== 1? 's': ''}`
  );

  onChange(event: Event, filterValue:FilterEnum) {
    event.preventDefault()
    console.log(filterValue);
    this.todoService.updateFilterSig(filterValue)
  }



}
