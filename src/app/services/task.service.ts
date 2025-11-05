import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService implements OnInit {
  private apiUrl = 'http://localhost:5000/tasks';
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }
getTasks(): Observable<Task[]> {
  return this.http.get<Task[]>(this.apiUrl)
    .pipe(
      catchError(err => {
        console.error('getTasks failed, returning mock tasks', err);
        return of(TASKS);
      })
    );
}

deleteTask(task: Task): Observable<Task> {
  const url = `${this.apiUrl}/${task.id}`;
  return this.http.delete<Task>(url);
}
}
