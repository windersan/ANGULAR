import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';


import { Observable } from 'rxjs/Observable';

import { TaskDetailComponent } from './components/task_detail/task_detail.component';



@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        
        
        HomeComponent,

        TaskDetailComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        ReactiveFormsModule,

        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
           

            { path: 'task_detail', component: TaskDetailComponent},

            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
