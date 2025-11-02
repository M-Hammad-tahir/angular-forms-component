import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header.component/header.component';
import { Tasks } from "./components/tasks/tasks";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, Tasks, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-forms-component');
}
