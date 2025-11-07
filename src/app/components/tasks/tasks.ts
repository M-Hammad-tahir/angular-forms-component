import { Component, OnInit } from '@angular/core';
import {  NgFor } from '@angular/common';
import { TaskItem } from "../task-item/task-item";
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskItem, NgFor],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t) => t.id !== task.id));
    console.log('Delete task in tasks component', task.id);
  }

}
