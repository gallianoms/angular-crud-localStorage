import { Component, OnInit } from '@angular/core';

import {TaskService} from '../../services/task.service';
import {ITask} from '../../models/Task';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: ITask[];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.tasks = this.taskService.getTask();
  }

}
