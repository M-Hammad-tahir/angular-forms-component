import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
    
  }
  getTasks(): Observable<Task[]> {
    const task = of(TASKS);
    return task;
  }
}
