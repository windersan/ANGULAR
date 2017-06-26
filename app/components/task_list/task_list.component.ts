import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { HTask, dynoSizes, frequencies } from './data_model';
import { TaskService } from './task.service';

@Component({
    selector: 'task_list',
    templateUrl: './task_list.component.html'
})
export class TaskListComponent implements OnInit {
    htasks: Observable<HTask[]>;
    isLoading = false;
    selectedTask: HTask;

    constructor(private taskService: TaskService) { }

    ngOnInit() { this.getTasks(); }

    getTasks() {
        this.isLoading = true;
        this.htasks = this.taskService.getTasks() 
            .finally(() => this.isLoading = false);
        this.selectedTask = undefined;
    }

    select(htask: HTask) { this.selectedTask = htask; }
}







