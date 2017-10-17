import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LandingComponent} from './components/landing/landing.component';

import {SharedCanActivateAuthService} from './components/shared/service/shared-can-activate-auth.service';

const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        canActivate: [SharedCanActivateAuthService]
    },
    {path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutes {}
