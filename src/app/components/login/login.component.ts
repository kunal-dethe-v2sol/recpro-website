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
        if (data.email && data.password) {
            if (data.email == 'kunal.dethe@v2solutions.com' && data.password == 'admin@123') {
                //var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRjYTZiOGMxLTliYTQtNGMwNy1hN2M4LTNiNjNmNTU4MGI0NSIsInN1YiI6ImRjYTZiOGMxLTliYTQtNGMwNy1hN2M4LTNiNjNmNTU4MGI0NSIsImV4cCI6MTUwNTgyMTUzMywidXNlciI6eyJ1dWlkIjoiZGNhNmI4YzEtOWJhNC00YzA3LWE3YzgtM2I2M2Y1NTgwYjQ1IiwicmVnaXN0cmF0aW9uX3R5cGUiOiJhZG1pbi1pbnZpdGUiLCJzb2NpYWxfdHlwZSI6ImxpbmtjeG8iLCJmaXJzdG5hbWUiOiJLdW5hbCIsImxhc3RuYW1lIjoiRGV0aGUiLCJtb2JpbGVfbm8iOiI3ODk0NjUxMzIwIiwiYWx0X21vYmlsZSI6bnVsbCwibWFyaXRhbF9zdGF0dXMiOm51bGwsImdlbmRlciI6bnVsbCwiZG9iIjpudWxsLCJjb3VudHJ5X2lkIjpudWxsLCJzdGF0ZV9pZCI6bnVsbCwiY2l0eV9pZCI6bnVsbCwiemlwY29kZSI6bnVsbCwicHJvZmlsZV9pbWFnZSI6bnVsbCwiaGVhZGxpbmUiOm51bGwsInRva2VucyI6bnVsbCwiZmxhZ19tb2JpbGUiOiJ1bi12ZXJpZmllZCIsImZsYWdfYWx0X21vYmlsZSI6InVuLXZlcmlmaWVkIiwicm9sZV9pZCI6IjRkY2ZlN2Q0LWMxNjgtNGQyNS1iZWU1LTE3NWY2ZDM4MDU5ZSIsInRvdGFsX2V4cCI6bnVsbCwia2V5X3NraWxscyI6bnVsbCwic3VtbWFyeSI6bnVsbCwicmVzdW1lMSI6bnVsbCwicmVzdW1lMiI6bnVsbCwicmVzdW1lX3R5cGUxIjpudWxsLCJyZXN1bWVfdHlwZTIiOm51bGwsInByb2ZpbGVfc25hcHNob3QiOm51bGwsInN0YXR1cyI6ImFjdGl2ZSIsImZ1bGxfbmFtZSI6Ikt1bmFsIERldGhlIn19.QY2NU8DxP0J2gDQbAyN4wIiJNw9mzGIzvJWG03bybvw';
                var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRjYTZiOGMxLTliYTQtNGMwNy1hN2M4LTNiNjNmNTU4MGI0NSIsInN1YiI6ImRjYTZiOGMxLTliYTQtNGMwNy1hN2M4LTNiNjNmNTU4MGI0NSIsImV4cCI6MTUwNTgyMTUzMywidXNlciI6eyJ1dWlkIjoiZGNhNmI4YzEtOWJhNC00YzA3LWE3YzgtM2I2M2Y1NTgwYjQ1IiwicmVnaXN0cmF0aW9uX3R5cGUiOiJhZG1pbi1pbnZpdGUiLCJzb2NpYWxfdHlwZSI6ImxpbmtjeG8iLCJmaXJzdG5hbWUiOiJLdW5hbCIsImxhc3RuYW1lIjoiRGV0aGUiLCJtb2JpbGVfbm8iOiI3ODk0NjUxMzIwIiwiYWx0X21vYmlsZSI6bnVsbCwibWFyaXRhbF9zdGF0dXMiOm51bGwsImdlbmRlciI6bnVsbCwiZG9iIjpudWxsLCJjb3VudHJ5X2lkIjpudWxsLCJzdGF0ZV9pZCI6bnVsbCwiY2l0eV9pZCI6bnVsbCwiemlwY29kZSI6bnVsbCwicHJvZmlsZV9pbWFnZSI6bnVsbCwiaGVhZGxpbmUiOm51bGwsInRva2VucyI6bnVsbCwiZmxhZ19tb2JpbGUiOiJ1bi12ZXJpZmllZCIsImZsYWdfYWx0X21vYmlsZSI6InVuLXZlcmlmaWVkIiwicm9sZV9pZCI6IjRkY2ZlN2Q0LWMxNjgtNGQyNS1iZWU1LTE3NWY2ZDM4MDU5ZSIsInJvbGUiOiJhZG1pbiIsInRvdGFsX2V4cCI6bnVsbCwia2V5X3NraWxscyI6bnVsbCwic3VtbWFyeSI6bnVsbCwicmVzdW1lMSI6bnVsbCwicmVzdW1lMiI6bnVsbCwicmVzdW1lX3R5cGUxIjpudWxsLCJyZXN1bWVfdHlwZTIiOm51bGwsInByb2ZpbGVfc25hcHNob3QiOm51bGwsInN0YXR1cyI6ImFjdGl2ZSIsImZ1bGxfbmFtZSI6Ikt1bmFsIERldGhlIn19.luG5BApYv2W047vL4g7Nb-mlqVmbnJIXbsLvNqjNkgg';                
                this._sharedService.getAuthService().login({ token: token });
                this._sharedService.loginEventEmitter.emit(true);
                this._router.navigate(['dashboard']);
            } else {
                this._sharedService.getToastrService().pop('error', 'Error', 'Invalid Email or Password!');
            }
        }

    }
}
