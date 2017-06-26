/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { TaskDetailComponent } from './task_detail.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

let fixture: ComponentFixture<TaskDetailComponent>;

//If our component breaks, this will give us errors 
describe('Task_detail component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [TaskDetailComponent] });
        fixture = TestBed.createComponent(TaskDetailComponent);
        fixture.detectChanges();
    });

    

    
});
