import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationComponent } from './organization.component';

import { SharedCanActivateAuthService } from './../shared/service/shared-can-activate-auth.service';

const routes: Routes = [
    {
        path: 'organization',
        component: OrganizationComponent,
        canActivate: [SharedCanActivateAuthService]
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class OrganizationRoutes { }
