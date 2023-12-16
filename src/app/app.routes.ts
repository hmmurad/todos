import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TodosComponent },
];
