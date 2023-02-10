import { Injectable } from '@angular/core';

import {ITask} from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: ITask[];

  constructor() {
    this.tasks = [
    //   {
    //     title: 'test1', description: 'description1', hide: true
    //   },
    //   {
    //     title: 'test2', description: 'description2', hide: true
    //   }
    ];
  }

  getTask() {
    if (localStorage.getItem('tasks') === null) {
      return this.tasks;
    } else {
      return this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  }

  addTask(task: ITask) {
    let tasks: ITask[] = [];
    this.tasks.push(task);
    if (localStorage.getItem('tasks') === null) {
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

  }

  deleteTask(task: ITask) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (task === this.tasks[i]) {
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }

}
