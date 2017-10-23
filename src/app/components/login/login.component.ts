import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ValidationExtensions } from 'ng2-mdf-validation-messages';

import { SharedService } from './../shared/service/shared.service';
import { LoginService } from './login.service';

@Component({
    selector: 'recpro-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    //Variables
    loginForm: FormGroup;
    email: FormControl;
    password: FormControl;

    //Constructor parameters
    static get parameters() {
        return [
            SharedService,
            LoginService,
            Router,
            ActivatedRoute,
            FormBuilder
        ];
    }

    //Constructor
    constructor(
        private _sharedService,
        private _loginService,
        private _router,
        private _activatedRoute,
        private _fb) {


    }

    //Angular Hooks
    ngOnInit() {
        this.createForm();


    }

    createForm() {
        this.email = this._fb.control('kunal.dethe@v2solutions.com', [
            ValidationExtensions.required(),
            ValidationExtensions.email()
        ]);
        this.password = this._fb.control('admin@123', [
            ValidationExtensions.required(),
            ValidationExtensions.maxLength(10)
        ]);

        this.loginForm = this._fb.group({
            email: this.email,
            password: this.password,
        });
    }

    onSubmit(data): void {
        this._loginService
            .login(data)
            .subscribe(
            response => {
                this._sharedService.getAuthService().login({ token: response[0] });
                this._sharedService.loginEventEmitter.emit(true);
                this._router.navigate(['dashboard']);
            },
            error => {
                this._sharedService.getToastrService().pop('error', 'Error', 'Invalid Email or Password!');
            });
    }
}
