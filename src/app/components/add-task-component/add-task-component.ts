import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';

@Component({
  standalone: true,
  selector: 'app-add-task-component',
  imports: [FormsModule],
  templateUrl: './add-task-component.html',
  styleUrl: './add-task-component.css',
})
export class AddTaskComponent {

  constructor() {}

  title: string = 'Adding tasks in this component';

  // bound form fields
  task: string = '';
  time: string = '';
  reminder: boolean = false;

  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  onSubmit() {
    if (!this.task) {
      return;
    }
    const newTask: Task = {
      text: this.task,
      day: this.time,
      reminder: this.reminder,
    };
    this.addTask.emit(newTask);
    // reset form
    this.task = '';
    this.time = '';
    this.reminder = false;
  }

}
