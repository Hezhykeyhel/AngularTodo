import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  ngModel: string = '';

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second Todo',
        completed: true,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos.map((file, index) => {
      if (index == id) file.completed = !file.completed;
      return file;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((_files, index) => index !== id);
  }

  addTodo() {
  
    if (this.ngModel === '') return;
    if (this.ngModel.length <= 0) return;
    this.todos.push({
      content: this.ngModel,
      completed: false,
    });
    this.ngModel = '';
  }

  editTask(idx: number) {
    let title = this.todos[idx].content;
    let result = prompt('Edit Task Title', title);
    if (result !== null) {
      this.todos[idx].content = result;
    }
  }
}
