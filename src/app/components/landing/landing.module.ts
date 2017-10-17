import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2MDFValidationMessagesModule } from 'ng2-mdf-validation-messages';

import { LandingComponent } from './landing.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

import { CONST } from './../shared/shared.constants';

@NgModule({
    declarations: [
        LandingComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,    //Required for LoginComponent and RegisterComponent
        ReactiveFormsModule,    //Required for LoginComponent and RegisterComponent
        Ng2MDFValidationMessagesModule.globalConfig(CONST['ng2MDFValidationMessagesConfig'])    //Required for LoginComponent and RegisterComponent
    ]
})
export class LandingModule { }
