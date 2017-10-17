import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routes';

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutes
    ],
    providers: []
})
export class DashboardModule { }
