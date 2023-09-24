import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  newTask: string = "";
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTask() {
    if (this.newTask) {
      this.todoService.addTask(this.newTask);
      this.newTask = "";
    }
  }
}
