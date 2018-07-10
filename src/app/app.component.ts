import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput: string = "";

  todos = [
    {
      isChecked: false,
      name: 'mow the lawn'
    },
    {
      isChecked: true,
      name: 'eat ice cream'
    },
    {
      isChecked: false,
      name: 'watch mr.robot'
    }
  ];

  createTodo() {
    // code that will create a todo 
    let trimmedInput = this.todoInput.trim();
    if(trimmedInput !== ""){
      this.todos.push({
        isChecked: false,
        name: this.todoInput
      }); 
} 

  this.todoInput = "";
}

editTodo(todo) {
  // edits the todo
  let index = this.todos.indexOf(todo);

// Storing the Todo Description
  let oldTodo = this.todos[index].name;
  
// Prompt the user to change the text
  this.todos[index].name = prompt("Please edit your todo", 
  this.todos[index].name);

  if (this.todos[index].name == null) {
    // If the user cancels on the prompt,
    // put the Old Todo Descirption back
    this.todos[index].name = oldTodo;
  }
}

  checkOffTodo(todo) {
  todo.isChecked = !todo.isChecked;
}



  deleteTodo(todo) {
  let index = this.todos.indexOf(todo);
  this.todos.splice(index, 1);
// deletes todo
}

  deleteAllTodos() {
  this.todos = [];
 }


}



