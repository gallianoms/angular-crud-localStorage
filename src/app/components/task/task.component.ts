import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }

  deleteTask(task) {
    if (confirm('Are you sure you want to delete it?')) {
      this.taskService.deleteTask(task);
    }
  }

}
