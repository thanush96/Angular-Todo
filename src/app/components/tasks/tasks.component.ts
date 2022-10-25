import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskItemService } from '../../services/task-item.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskItemService: TaskItemService) {}

  ngOnInit(): void {
    // this.taskItemService.getTaskList().subscribe((tasks) => (this.tasks = tasks));
    this.taskItemService.getTaskList().subscribe((res) => {
      this.tasks = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Task;
      });
    });
  }

  deleteTask(task: any) {
    this.taskItemService.deleteTask(task);
  }

  reminderUpdate(task: any) {
    this.taskItemService.reminderUpdate(task);
  }

  createNewTask(task: any) {
    this.taskItemService.createTask(task);
  }
}
