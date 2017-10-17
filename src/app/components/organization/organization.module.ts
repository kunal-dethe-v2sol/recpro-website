import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2MDFValidationMessagesModule } from 'ng2-mdf-validation-messages';

import { OrganizationComponent } from './organization.component';
import { OrganizationService } from './organization.service';
import { OrganizationRoutes } from './organization.routes';

import { CONST } from './../shared/shared.constants';

@NgModule({
    declarations: [
        OrganizationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2MDFValidationMessagesModule.globalConfig(CONST['ng2MDFValidationMessagesConfig']),
        OrganizationRoutes
    ],
    providers: [
        OrganizationService
    ]
})
export class OrganizationModule { }
