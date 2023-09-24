import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasks: string[] = [];

  addTask(task: string) {
    this.tasks.push(task);
  }
}
