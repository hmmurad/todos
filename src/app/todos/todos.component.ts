import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './todos.component.html',
})
export class TodosComponent {}
