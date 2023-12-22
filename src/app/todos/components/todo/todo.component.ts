import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, computed, inject } from '@angular/core';
import { Todo } from '../../interface/todo.interface';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit, OnChanges{
  todoService = inject(TodoService);
  @Input() todo!: Todo;
  @Input({required : true}) isEditing!: boolean
  @Output() setEditingId = new EventEmitter<string|null>()
  todoCount = computed(() => this.todoService.todoSig().length);
  editingText!: string


  @ViewChild('inputText') inputText!: ElementRef
  ngOnChanges(changes: SimpleChanges): void {    
    if(changes['isEditing'].currentValue) {
      setTimeout(() => {
        this.inputText?.nativeElement.focus()
      },0)
    }
  }

  deleteTodo(todo: Todo) {
    this.todoService.removeTodo(todo);
  }

  changeText(event: Event) : void{
    const value = (event.target as HTMLInputElement).value
    this.editingText = value
  }

  updateTodo() {
    this.todoService.updateTodo(this.todo.id, this.editingText)
    this.setEditingId.emit(null)
  }

  ngOnInit(): void {
    this.editingText = this.todo.text
  }

  setID() {
    this.setEditingId.emit(this.todo.id)
  }

  toggleTodo() {
    this.todoService.changeStatus(this.todo.id)
  }


    
}
