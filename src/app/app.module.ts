import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Ng2Webstorage } from 'ng2-webstorage';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular2-toaster';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedLayoutGuestComponent } from './components/shared/layout/guest/shared-layout-guest.component';
import { SharedLayoutUserComponent } from './components/shared/layout/user/shared-layout-user.component';

import { AppRoutes } from './app.routes';

import { SharedModule } from './components/shared/shared.module';
import { LandingModule } from './components/landing/landing.module';
import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { OrganizationModule } from './components/organization/organization.module';

import { SharedCanActivateAuthService } from './components/shared/service/shared-can-activate-auth.service';

@NgModule({
    declarations: [
        AppComponent,
        SharedLayoutGuestComponent,
        SharedLayoutUserComponent
    ],
    imports: [
        BrowserModule,
        Ng2Webstorage,
        Ng2Webstorage.forRoot({ prefix: 'recpro', separator: '.', caseSensitive: true }),
        BrowserAnimationsModule,
        ToasterModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpModule,
        SharedModule,
        LandingModule,
        LoginModule,
        RegisterModule,
        DashboardModule,
        OrganizationModule,
        AppRoutes
    ],
    providers: [
        SharedCanActivateAuthService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
