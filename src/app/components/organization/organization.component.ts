import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ValidationExtensions } from 'ng2-mdf-validation-messages';

import { SharedService } from './../shared/service/shared.service';
import { OrganizationService } from './organization.service';

@Component({
    selector: 'recpro-organization',
    templateUrl: './organization.component.html'
})
export class OrganizationComponent implements OnInit {

    //Variables
    form: FormGroup;
    name: FormControl;

    //Constructor parameters
    static get parameters() {
        return [
            SharedService,
            OrganizationService,
            Router,
            ActivatedRoute,
            FormBuilder
        ];
    }

    //Constructor
    constructor(
        private _sharedService,
        private _organizationService,
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
        this.name = this._fb.control('', [
            ValidationExtensions.required()
        ]);

        this.form = this._fb.group({
            name: this.name
        });
    }

    onSubmit(): void {
        var formValues = this.form.value;
        console.log('this.form', this.form);
        console.log('formValues', formValues);

        var data = new FormData();
        data.append("name", formValues.name);
        console.log('data', data);

        this._organizationService
            .new(data)
            .subscribe(
            response => {
                this._sharedService.getToastrService().pop('success', 'Success', response[0]);
                
            },
            error => {
                this._sharedService.getToastrService().pop('error', 'Error', error);
            });
    }
}
