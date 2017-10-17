import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegisterService } from './register.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        RegisterService
    ]
})
export class RegisterModule { }
