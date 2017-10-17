import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ValidationExtensions } from 'ng2-mdf-validation-messages';

import { SharedService } from './../shared/service/shared.service';
import { RegisterService } from './register.service';

@Component({
    selector: 'recpro-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    //Variables
    

    //Constructor parameters
    static get parameters() {
        return [
            SharedService,
            RegisterService,
            Router,
            ActivatedRoute,
            FormBuilder
        ];
    }

    //Constructor
    constructor(
        private _sharedService,
        private _registerService,
        private _router,
        private _activatedRoute,
        private _fb) {


    }

    //Angular Hooks
    ngOnInit() {
        this.createForm();


    }

    //Custom Methods
    createForm() {
        
    }

    onSubmit(data): void {
        
    }
}
