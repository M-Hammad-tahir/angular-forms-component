import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header.component/header.component';
import { Tasks } from "./components/tasks/tasks";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeaderComponent, Tasks, FontAwesomeModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-forms-component');
}