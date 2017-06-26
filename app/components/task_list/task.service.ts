import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { HTask, htasks } from './data_model';

@Injectable()
export class TaskService {

    delayMs = 500;

    //Mock server with latency
    getTasks(): Observable<HTask[]> {
        return of(htasks).delay(this.delayMs); 
    }

   
    updateTask(htask: HTask): Observable<HTask> {
        const oldTask = htasks.find(h => h.id === htask.id);
        const newTask = Object.assign(oldTask, htask); 
        return of(newTask).delay(this.delayMs); 
    }
}