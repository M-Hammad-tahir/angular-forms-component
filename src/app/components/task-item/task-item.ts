import { Component, OnInit, Input } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  imports: [NgFor, FaIconComponent, NgStyle],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {
    
  }

  onDelete(task: Task) {
    console.log('Delete clicked', task);
  }

}
