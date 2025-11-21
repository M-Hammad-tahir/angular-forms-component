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

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  onSubmit() {
    if (!this.text){
      alert('Please add a task!');
    }

    const newTask = {
    text: this.text,
    day: this.day,
    reminder: this.reminder
    };

    //Emitting task value for accessing in parent

    this.addTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}

