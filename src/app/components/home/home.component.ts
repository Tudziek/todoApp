import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks = [];
  
  constructor() { }

  addTask() {
    let task = 'Task number';
    this.tasks.push(task);
    this.setItems();
  }

  removeTask() {
    this.tasks.pop();
    this.setItems();
  }

  clearTask() {
    this.tasks = [];
    this.setItems();
  }

  setItems() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }


  ngOnInit() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
  }

}
