import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string;
  description:string;
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  handleSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
      description: this.description,
      active: true
    }
  this.todoAdd.emit(todo);
  }
}
