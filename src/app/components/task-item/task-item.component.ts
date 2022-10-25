import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteFunction: EventEmitter<Task> = new EventEmitter();
  @Output() toggleFunction: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: any) {
    this.deleteFunction.emit(task);
    // console.log('onDelete', task);
  }

  onToggle(task: any) {
    this.toggleFunction.emit(task);
    // console.log('onToggle', task);
  }
}
