import { NgFor, NgIf } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Todo } from '../../interface/todo.interface';
import { TodoService } from '../../services/todo.service';
import { TodoComponent } from '../todo/todo.component';
import { FilterEnum } from '../../interface/todo.enum';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor, NgIf, TodoComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {
  todoService = inject(TodoService);
  todoCount = computed(() => this.todoService.todoSig().length);
  editingId!: string | null
  setEditingId(editingId: string | null) {
    this.editingId = editingId
  }



  visibleTodos = computed(() => {
    const todos = this.todoService.todoSig()
    const filter = this.todoService.filterSig()
    if(filter === FilterEnum.active) {
      return todos.filter(todo => !todo.isCompleted)
    } else if(filter === FilterEnum.completed){
      return todos.filter(todo => todo.isCompleted)      
    } 
      return todos
     
  })

  deleteTodo(todo: Todo) {
    this.todoService.removeTodo(todo);
  }
}
