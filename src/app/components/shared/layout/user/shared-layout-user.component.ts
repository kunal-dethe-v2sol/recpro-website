import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {SharedService} from './../../service/shared.service';

@Component({
    selector: 'recpro-shared-layout-user',
    templateUrl: './shared-layout-user.component.html'
})
export class SharedLayoutUserComponent implements OnInit {

    //Variables
    public loggedInUserData = [];

    //Constructor parameters
    static get parameters() {
        return [
            SharedService,
            Router,
            ActivatedRoute
        ];
    }

    //Constructor
    constructor(
        private _sharedService,
        private _router,
        private _activatedRoute) {


    }

    //Angular Hooks
    ngOnInit() {
        this.loggedInUserData = this._sharedService.getAuthService().getLoggedInUserData();
    }

    //Custom Methods
    logout() {
        this._sharedService.getAuthService().logout();
        this._sharedService.loginEventEmitter.emit(false);
        this._router.navigate(['']);
    }
}
