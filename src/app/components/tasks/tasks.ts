import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {  NgFor } from '@angular/common';
import { TaskItem } from "../task-item/task-item";
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from "../add-task-component/add-task-component";

@Component({
  selector: 'app-tasks',
  imports: [TaskItem, NgFor, AddTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
      // with zoneless change detection we need to trigger a change detection run
      // so update is reflected immediately in the UI
      this.cd.detectChanges();
    });
    console.log('Delete task in tasks component', task.id);
  }
  
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
    this.cd.detectChanges();
  }

}
 