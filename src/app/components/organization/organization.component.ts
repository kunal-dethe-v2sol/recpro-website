import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ValidationExtensions } from 'ng2-mdf-validation-messages';

import { SharedService } from './../shared/service/shared.service';
import { OrganizationService } from './organization.service';
import {CONST} from './../shared/shared.constants';

@Component({
    selector: 'recpro-organization',
    templateUrl: './organization.component.html'
})
export class OrganizationComponent implements OnInit {

    //Variables
    organizations = [];
    showBusy = true;
    page = 1;
    limit = CONST['paginationLimitShortListing'];
    total_count = 0;

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
        this.list();
        this.createForm();
    }

    //Custom Methods
    previousPage() {
        this.page--;
        this.list();
    }
    
    nextPage() {
        this.page++;
        this.list();
    }

    createForm() {
        this.name = this._fb.control('', [
            ValidationExtensions.required()
        ]);

        this.form = this._fb.group({
            name: this.name
        });
    }

    list() {
        this.showBusy = true;
        this.organizations = [];
        
        this._organizationService
            .list(this.page, this.limit)
            .subscribe(
            response => {
                this.showBusy = false;
                this.organizations = response[0].organizations.rows;
                this.total_count = response[0].organizations.count;
            },
            error => {
                console.log('error: ', error);
            });
    }

    onSubmit(): void {
        var formValues = this.form.value;
        console.log('this.form', this.form);
        console.log('formValues', formValues);

        var data = {
            name: formValues.name
        }
        console.log('data', data);

        this._organizationService
            .new(data)
            .subscribe(
            response => {
				console.log('response', response);
                this._sharedService.getToastrService().pop('success', 'Success', response[0]);
                
            },
            error => {
                this._sharedService.getToastrService().pop('error', 'Error', error);
            });
    }
}
